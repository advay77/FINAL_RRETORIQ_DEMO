/**
 * Google Gemini AI Analysis Service
 * 
 * Analyzes interview answers using Google's Gemini 1.5 models
 * Much more cost-effective than OpenAI GPT-4 (~99% cheaper)
 * 
 * Pricing (as of 2025):
 * - Gemini 2.5 Flash: ~$0.0001 per analysis (recommended)
 * - Gemini 1.5 Pro: ~$0.001 per analysis (higher quality)
 */

// Proxy configuration - call server-side proxy which holds API keys
const API_PROXY_BASE = import.meta.env.VITE_API_PROXY_BASE || (typeof window !== 'undefined' && window.location && window.location.hostname.includes('rretoriq25.web.app') ? 'https://rretoriq-backend-api.vercel.app/api' : '/api')
const GEMINI_PROXY_URL = `${API_PROXY_BASE}/gemini-proxy`

// Gemini model (still configurable client-side, but key lives on server)
const GEMINI_MODEL = import.meta.env.VITE_GEMINI_MODEL || 'gemini-2.5-flash'

import { staticAnalysisService, type AudioMetrics } from './staticAnalysisService'

export interface InterviewQuestion {
  id: string
  question: string
  type: 'behavioral' | 'technical' | 'situational' | 'case-study'
  difficulty: 'easy' | 'medium' | 'hard'
  skills: string[]
  expectedDuration: number // in seconds
  category: string
}

export interface AnswerAnalysis {
  overallScore: number // 0-100
  transcript: string
  feedback: {
    strengths: string[]
    weaknesses: string[]
    suggestions: string[]
    detailedFeedback: string
  }
  scores: {
    clarity: number // 0-100
    relevance: number // 0-100
    structure: number // 0-100
    completeness: number // 0-100
    confidence: number // 0-100
  }
  keyPoints: {
    covered: string[]
    missed: string[]
  }
  timeManagement: {
    duration: number
    efficiency: 'excellent' | 'good' | 'average' | 'poor'
    pacing: string
  }
  processingTime: number
}

export interface AnalysisRequest {
  transcript: string
  question: InterviewQuestion
  audioDuration: number // in seconds
  transcriptionConfidence: number
  audioBlob?: Blob // Optional for static metrics fallback
  audioLevelData?: { maxRms: number; sumRms: number; frames: number } // Optional for static metrics fallback
}

class GeminiAnalysisService {
  private model: string

  constructor() {
    this.model = GEMINI_MODEL
  }

  /**
   * Process a full audio response with optional AI analysis
   */
  async processAudioResponse(request: AnalysisRequest): Promise<AnswerAnalysis> {
    // If we have blob data, we can calculate real metrics first
    let audioMetrics: AudioMetrics | null = null
    if (request.audioBlob && request.audioLevelData) {
      audioMetrics = staticAnalysisService.analyzeAudioMetrics(
        request.audioBlob,
        request.audioDuration,
        request.transcript,
        request.audioLevelData
      )
    }

    // Attempt AI analysis if transcript exists
    if (request.transcript.trim().length > 0) {
      try {
        return await this.analyzeAnswer(request)
      } catch (error) {
        console.warn('⚠️ Gemini AI analysis failed, falling back to static analysis:', error)
      }
    }

    // Static fallback if AI fails or no transcript
    if (audioMetrics) {
      return staticAnalysisService.generateStaticAnalysis(audioMetrics)
    }

    // Absolute fallback if everything else fails
    return staticAnalysisService.analyzeAnswer(request)
  }

  /**
   * Generate detailed analysis prompt for Gemini
   */
  private generateAnalysisPrompt(
    question: InterviewQuestion,
    transcript: string,
    duration: number,
    confidence: number
  ): string {
    return `You are an expert interview coach analyzing a candidate's response. Provide comprehensive feedback.

QUESTION DETAILS:
- Question: "${question.question}"
- Type: ${question.type}
- Difficulty: ${question.difficulty}
- Skills Evaluated: ${question.skills.join(', ')}
- Expected Duration: ${question.expectedDuration} seconds
- Category: ${question.category}

CANDIDATE'S RESPONSE:
- Transcript: "${transcript}"
- Actual Duration: ${duration} seconds
- Transcription Confidence: ${Math.round(confidence * 100)}%

ANALYSIS INSTRUCTIONS:
Provide your analysis in **valid JSON format only**. No markdown, no code blocks, just pure JSON:

{
  "overallScore": <number 0-100>,
  "feedback": {
    "strengths": [<array of 3-5 specific strengths>],
    "weaknesses": [<array of 2-4 areas for improvement>],
    "suggestions": [<array of 3-5 actionable recommendations>],
    "detailedFeedback": "<2-3 sentence comprehensive feedback>"
  },
  "scores": {
    "clarity": <number 0-100>,
    "relevance": <number 0-100>,
    "structure": <number 0-100>,
    "completeness": <number 0-100>,
    "confidence": <number 0-100>
  },
  "keyPoints": {
    "covered": [<key points addressed>],
    "missed": [<important points not mentioned>]
  },
  "timeManagement": {
    "efficiency": "<excellent|good|average|poor>",
    "pacing": "<brief description of timing>"
  }
}

SCORING CRITERIA:
- Clarity: How clear and articulate is the response
- Relevance: How well the answer addresses the question
- Structure: Logical flow and organization
- Completeness: Thoroughness of the response
- Confidence: Perceived conviction and assertiveness

Return ONLY the JSON object, no additional text.`
  }

  /**
   * Analyze interview answer using Google Gemini
   */
  async analyzeAnswer(request: AnalysisRequest): Promise<AnswerAnalysis> {
    const startTime = Date.now()
    const GEMINI_KEY = import.meta.env.VITE_GEMINI_API_KEY || import.meta.env.VITE_GOOGLE_SPEECH_API_KEY

    try {
      const prompt = this.generateAnalysisPrompt(
        request.question,
        request.transcript,
        request.audioDuration,
        request.transcriptionConfidence
      )

      console.log('🤖 Starting Gemini AI analysis...', {
        model: this.model,
        questionType: request.question.type,
        transcriptLength: request.transcript.length,
        duration: request.audioDuration,
        method: GEMINI_KEY ? 'Direct API' : 'Server Proxy'
      })

      let response;

      if (GEMINI_KEY && GEMINI_KEY.startsWith('AIza')) {
        // Direct call to Google Gemini API
        // Use gemini-2.5-flash as it's the most stable/available
        const modelName = 'gemini-2.5-flash'
        const url = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${GEMINI_KEY}`

        response = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }]
          })
        })
      } else {
        // Fallback to server proxy
        response = await fetch(GEMINI_PROXY_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ model: this.model, input: prompt })
        })
      }

      if (!response.ok) {
        const errorText = await response.text()
        throw new Error(`Gemini API error (${response.status}): ${errorText.substring(0, 100)}`)
      }

      const data = await response.json()
      const processingTime = Date.now() - startTime

      let analysisText = ''

      // Handle both direct API response structure and proxy response structure
      if (data.candidates && data.candidates[0]?.content?.parts?.[0]?.text) {
        analysisText = data.candidates[0].content.parts[0].text
      } else if (data.text) {
        analysisText = data.text
      } else if (data.response) {
        analysisText = data.response
      } else {
        throw new Error('No analysis results received from Gemini')
      }

      // Remove markdown code blocks if present
      let cleanedText = analysisText.trim()
      if (cleanedText.startsWith('```json')) {
        cleanedText = cleanedText.replace(/^```json\n?/, '').replace(/\n?```$/, '')
      } else if (cleanedText.startsWith('```')) {
        cleanedText = cleanedText.replace(/^```\n?/, '').replace(/\n?```$/, '')
      }

      const analysisResult = JSON.parse(cleanedText)

      return {
        ...analysisResult,
        transcript: request.transcript,
        timeManagement: {
          ...analysisResult.timeManagement,
          duration: request.audioDuration
        },
        processingTime
      }

    } catch (error) {
      console.error('❌ Gemini AI analysis error:', error)
      throw error // Let processAudioResponse handle fallback
    }
  }

  /**
   * Generate quick feedback for immediate display
   */
  generateQuickFeedback(transcript: string, duration: number) {
    return staticAnalysisService.generateQuickFeedback(transcript, duration)
  }

  /**
   * Check if service is properly configured
   */
  isConfigured(): boolean {
    return true
  }

  /**
   * Get current model being used
   */
  getModel(): string {
    return this.model
  }
}

// Export singleton instance
export const geminiAnalysisService = new GeminiAnalysisService()
export default geminiAnalysisService
