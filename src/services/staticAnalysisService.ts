/**
 * Static Analysis Service
 * 
 * Provides rule-based metrics and a minimal fallback for analysis.
 * All comprehensive feedback is now handled dynamically via Gemini AI.
 */

import type { AnswerAnalysis, AnalysisRequest } from './geminiAnalysisService'

export interface AudioMetrics {
  duration: number // in seconds
  hasVoice: boolean // whether voice was detected
  transcript: string
  wordCount: number
  avgRms: number // average audio level
  maxRms: number // peak audio level
}

export class StaticAnalysisService {
  /**
   * Analyze audio metrics from recording
   */
  analyzeAudioMetrics(
    audioBlob: Blob,
    duration: number,
    transcript: string,
    audioLevelData: { maxRms: number; sumRms: number; frames: number }
  ): AudioMetrics {
    const wordCount = transcript.split(/\s+/).filter(w => w.length > 0).length
    const avgRms = audioLevelData.frames > 0 ? audioLevelData.sumRms / audioLevelData.frames : 0
    const maxRms = audioLevelData.maxRms

    const bytesPerSecond = duration > 0 ? audioBlob.size / duration : 0
    const hasAudioSignal = duration > 0 && audioBlob.size >= 2000 && bytesPerSecond >= 300 && (maxRms >= 0.015 || avgRms >= 0.008)
    const hasVoice = hasAudioSignal || wordCount > 0

    return {
      duration,
      hasVoice,
      transcript,
      wordCount,
      avgRms,
      maxRms
    }
  }

  /**
   * Minimal fallback analysis when AI is unavailable or input is invalid
   */
  generateStaticAnalysis(metrics: AudioMetrics): AnswerAnalysis {
    const { duration, hasVoice, transcript } = metrics

    // Basic state determination
    const isShort = duration < 10
    const score = !hasVoice ? 0 : (isShort ? 20 : 50)

    return {
      overallScore: score,
      transcript: transcript || (hasVoice ? "[Voice detected but transcript unavailable]" : "[No voice detected]"),
      feedback: {
        strengths: hasVoice ? ['Audio captured successfully'] : [],
        weaknesses: !hasVoice ? ['No voice detected'] : (isShort ? ['Response is very short'] : ['AI analysis temporarily unavailable']),
        suggestions: !hasVoice ? ['Check microphone settings'] : ['Try recording a longer, more detailed response'],
        detailedFeedback: !hasVoice
          ? 'We could not detect any voice in your recording. Please ensure your microphone is working and speak clearly.'
          : 'Your response has been captured. For a full AI-powered analysis with strengths and weaknesses, please ensure you have a stable connection and provide a detailed answer.'
      },
      scores: {
        clarity: hasVoice ? 60 : 0,
        relevance: hasVoice ? 50 : 0,
        structure: hasVoice ? 40 : 0,
        completeness: hasVoice ? 30 : 0,
        confidence: hasVoice ? 50 : 0
      },
      keyPoints: {
        covered: [],
        missed: []
      },
      timeManagement: {
        duration,
        efficiency: duration > 45 ? 'good' : 'average',
        pacing: hasVoice ? 'Pacing detected' : 'N/A'
      },
      processingTime: 100
    }
  }

  /**
   * Legacy method for compatibility
   */
  analyzeAnswer(request: AnalysisRequest): Promise<AnswerAnalysis> {
    const wordCount = request.transcript.split(/\s+/).filter(w => w.length > 0).length
    return Promise.resolve(this.generateStaticAnalysis({
      duration: request.audioDuration,
      hasVoice: wordCount > 0,
      transcript: request.transcript,
      wordCount: wordCount,
      avgRms: 0,
      maxRms: 0
    }))
  }

  /**
   * Generate quick metrics for immediate UI feedback
   */
  generateQuickFeedback(transcript: string, duration: number) {
    const wordCount = transcript.split(/\s+/).filter((w: string) => w.length > 0).length
    const wordsPerMinute = duration > 0 ? Math.round((wordCount / duration) * 60) : 0

    return {
      wordCount,
      duration,
      wordsPerMinute,
      estimatedScore: Math.min(Math.max(Math.round((wordCount / 100) * 80 + 20), 20), 95),
      quickTips: this.getQuickTips(wordCount, duration)
    }
  }

  private getQuickTips(wordCount: number, duration: number): string[] {
    const tips: string[] = []
    if (duration > 0 && duration < 30) tips.push('Aim for a longer response')
    if (wordCount > 0 && wordCount < 50) tips.push('Add more specific examples')
    return tips
  }
}

export const staticAnalysisService = new StaticAnalysisService()
export default staticAnalysisService
