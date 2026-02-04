/**
 * VoiceLibrary Component
 * 
 * Displays available voice audio files for IELTS practice
 * Allows users to select and analyze pre-recorded scenarios
 */

import React, { useState, useEffect, useRef } from 'react'
import {
  Play,
  Pause,
  Clock,
  CheckCircle,
  AlertCircle,
  Headphones,
  Star
} from 'lucide-react'

interface VoiceFile {
  id: string
  name: string
  displayName: string
  duration?: number
  category: string
  difficulty: 'Easy' | 'Medium' | 'Hard'
  description: string
}

interface VoiceLibraryProps {
  onFileSelect: (file: VoiceFile) => void
  selectedFile?: VoiceFile | null
  className?: string
}

export const VoiceLibrary: React.FC<VoiceLibraryProps> = ({
  onFileSelect,
  selectedFile,
  className = ''
}) => {
  const audioPreviewRef = useRef<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentlyPlaying, setCurrentlyPlaying] = useState<string | null>(null)
  const [audioDurations, setAudioDurations] = useState<{ [key: string]: number }>({})

  const voiceFiles: VoiceFile[] = [
    {
      id: 'the-borrowed-grade',
      name: 'The Borrowed Grade (1).mp3',
      displayName: 'The Borrowed Grade',
      duration: audioDurations['the-borrowed-grade'],
      category: 'Academic Ethics',
      difficulty: 'Medium',
      description: 'A scenario about academic integrity and difficult choices'
    },
    {
      id: 'the-borrowed-research',
      name: 'The Borrowed Research (1).mp3',
      displayName: 'The Borrowed Research',
      duration: audioDurations['the-borrowed-research'],
      category: 'Research Ethics',
      difficulty: 'Hard',
      description: 'Professional ethics in research and publication'
    },
    {
      id: 'the-bug-in-the-bank',
      name: 'The Bug in the Bank (1).mp3',
      displayName: 'The Bug in the Bank',
      duration: audioDurations['the-bug-in-the-bank'],
      category: 'Technical Dilemma',
      difficulty: 'Medium',
      description: 'Technical problem-solving in critical systems'
    },
    {
      id: 'the-clients-false-hope',
      name: 'The Client\'s False Hope (1).mp3',
      displayName: 'The Client\'s False Hope',
      duration: audioDurations['the-clients-false-hope'],
      category: 'Client Management',
      difficulty: 'Medium',
      description: 'Managing client expectations and difficult conversations'
    },
    {
      id: 'the-club-funds',
      name: 'The Club Funds (1).mp3',
      displayName: 'The Club Funds',
      duration: audioDurations['the-club-funds'],
      category: 'Financial Ethics',
      difficulty: 'Easy',
      description: 'Handling organizational finances and transparency'
    },
    {
      id: 'the-compromised-proctor',
      name: 'The Compromised Proctor (1).mp3',
      displayName: 'The Compromised Proctor',
      duration: audioDurations['the-compromised-proctor'],
      category: 'Academic Integrity',
      difficulty: 'Hard',
      description: 'Ethical dilemmas in examination supervision'
    },
    {
      id: 'the-cost-cutting-danger',
      name: 'The Cost-Cutting Danger (1).mp3',
      displayName: 'The Cost-Cutting Danger',
      duration: audioDurations['the-cost-cutting-danger'],
      category: 'Business Ethics',
      difficulty: 'Medium',
      description: 'Balancing cost reduction with quality and safety'
    },
    {
      id: 'the-credit-stealer',
      name: 'The Credit Stealer (1).mp3',
      displayName: 'The Credit Stealer',
      duration: audioDurations['the-credit-stealer'],
      category: 'Workplace Ethics',
      difficulty: 'Medium',
      description: 'Dealing with plagiarism and credit attribution'
    },
    {
      id: 'the-diversity-hire',
      name: 'The Diversity Hire (1).mp3',
      displayName: 'The Diversity Hire',
      duration: audioDurations['the-diversity-hire'],
      category: 'Workplace Diversity',
      difficulty: 'Hard',
      description: 'Navigating diversity, equity, and inclusion challenges'
    },
    {
      id: 'the-diversity-vs-merit',
      name: 'The Diversity vs. Merit (1).mp3',
      displayName: 'The Diversity vs. Merit',
      duration: audioDurations['the-diversity-vs-merit'],
      category: 'Hiring Practices',
      difficulty: 'Hard',
      description: 'Complex discussions about hiring criteria and fairness'
    },
    {
      id: 'the-fake-internship',
      name: 'The Fake Internship (1).mp3',
      displayName: 'The Fake Internship',
      duration: audioDurations['the-fake-internship'],
      category: 'Career Ethics',
      difficulty: 'Easy',
      description: 'Honesty in professional development opportunities'
    },
    {
      id: 'the-ghosted-client',
      name: 'The Ghosted Client (1).mp3',
      displayName: 'The Ghosted Client',
      duration: audioDurations['the-ghosted-client'],
      category: 'Client Relations',
      difficulty: 'Medium',
      description: 'Professional communication and client management'
    },
    {
      id: 'the-legacy-code-trap',
      name: 'The Legacy Code Trap (1).mp3',
      displayName: 'The Legacy Code Trap',
      duration: audioDurations['the-legacy-code-trap'],
      category: 'Technical Debt',
      difficulty: 'Hard',
      description: 'Managing legacy systems and technical decisions'
    },
    {
      id: 'the-managers-shadow',
      name: 'The Manager\'s Shadow (1).mp3',
      displayName: 'The Manager\'s Shadow',
      duration: audioDurations['the-managers-shadow'],
      category: 'Leadership',
      difficulty: 'Medium',
      description: 'Leadership challenges and team dynamics'
    },
    {
      id: 'the-over-allocated-lead',
      name: 'The Over-Allocated Lead (1).mp3',
      displayName: 'The Over-Allocated Lead',
      duration: audioDurations['the-over-allocated-lead'],
      category: 'Project Management',
      difficulty: 'Medium',
      description: 'Resource management and setting realistic expectations'
    },
    {
      id: 'the-placement-betrayal',
      name: 'The Placement Betrayal.mp3',
      displayName: 'The Placement Betrayal',
      duration: audioDurations['the-placement-betrayal'],
      category: 'Career Development',
      difficulty: 'Hard',
      description: 'Professional relationships and career opportunities'
    },
    {
      id: 'the-placement-dilemma',
      name: 'The Placement Dilemma.mp3',
      displayName: 'The Placement Dilemma',
      duration: audioDurations['the-placement-dilemma'],
      category: 'Career Choices',
      difficulty: 'Medium',
      description: 'Making difficult career decisions and trade-offs'
    },
    {
      id: 'the-social-media-firestorm',
      name: 'The Social Media Firestorm.mp3',
      displayName: 'The Social Media Firestorm',
      duration: audioDurations['the-social-media-firestorm'],
      category: 'Digital Ethics',
      difficulty: 'Hard',
      description: 'Managing social media crises and online reputation'
    },
    {
      id: 'the-stolen-project',
      name: 'The Stolen Project.mp3',
      displayName: 'The Stolen Project',
      duration: audioDurations['the-stolen-project'],
      category: 'Intellectual Property',
      difficulty: 'Medium',
      description: 'Protecting intellectual property and creative work'
    },
    {
      id: 'the-toxic-client',
      name: 'The Toxic Client.mp3',
      displayName: 'The Toxic Client',
      duration: audioDurations['the-toxic-client'],
      category: 'Client Management',
      difficulty: 'Hard',
      description: 'Handling difficult professional relationships'
    },
    {
      id: 'the-whistleblowers-price',
      name: 'The Whistleblower\'s Price.mp3',
      displayName: 'The Whistleblower\'s Price',
      duration: audioDurations['the-whistleblowers-price'],
      category: 'Ethical Courage',
      difficulty: 'Hard',
      description: 'The personal and professional costs of speaking up'
    },
    {
      id: 'the-work-life-ultimatum',
      name: 'The Work-Life Ultimatum.mp3',
      displayName: 'The Work-Life Ultimatum',
      duration: audioDurations['the-work-life-ultimatum'],
      category: 'Work-Life Balance',
      difficulty: 'Medium',
      description: 'Balancing professional demands with personal life'
    }
  ]

  // Load audio durations on component mount
  useEffect(() => {
    const loadDurations = async () => {
      const durations: { [key: string]: number } = {}
      
      for (const file of voiceFiles) {
        try {
          const audio = new Audio(`/voice/${file.name}`)
          await new Promise((resolve, reject) => {
            audio.addEventListener('loadedmetadata', resolve)
            audio.addEventListener('error', reject)
          })
          durations[file.id] = audio.duration
        } catch (error) {
          console.warn(`Could not load duration for ${file.name}:`, error)
        }
      }
      
      setAudioDurations(durations)
    }

    loadDurations()
  }, [])

  // Cleanup audio preview on unmount
  useEffect(() => {
    return () => {
      if (audioPreviewRef.current) {
        audioPreviewRef.current.pause()
        audioPreviewRef.current.src = ''
      }
    }
  }, [])

  const formatDuration = (seconds: number): string => {
    if (!seconds || isNaN(seconds)) return '--:--'
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-700 border-green-200'
      case 'Medium': return 'bg-yellow-100 text-yellow-700 border-yellow-200'
      case 'Hard': return 'bg-red-100 text-red-700 border-red-200'
      default: return 'bg-gray-100 text-gray-700 border-gray-200'
    }
  }

  const playPreview = async (file: VoiceFile) => {
    try {
      // Stop currently playing audio
      if (audioPreviewRef.current) {
        audioPreviewRef.current.pause()
        if (currentlyPlaying === file.id) {
          setIsPlaying(false)
          setCurrentlyPlaying(null)
          return
        }
      }

      // Create new audio element
      const audio = new Audio(`/voice/${file.name}`)
      audioPreviewRef.current = audio

      audio.addEventListener('ended', () => {
        setIsPlaying(false)
        setCurrentlyPlaying(null)
      })

      audio.addEventListener('loadedmetadata', () => {
        setAudioDurations(prev => ({
          ...prev,
          [file.id]: audio.duration
        }))
      })

      await audio.play()
      setIsPlaying(true)
      setCurrentlyPlaying(file.id)
    } catch (error) {
      console.error('Error playing audio preview:', error)
    }
  }

  return (
    <div className={`bg-white border border-gray-200 rounded-xl p-6 ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
            <Headphones className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Voice Library</h3>
            <p className="text-sm text-gray-600">Select a scenario to analyze</p>
          </div>
        </div>
        <div className="text-sm text-gray-500">
          {voiceFiles.length} scenarios available
        </div>
      </div>

      {/* Selected File Display */}
      {selectedFile && (
        <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-emerald-600" />
              <div>
                <p className="font-medium text-emerald-900">{selectedFile.displayName}</p>
                <p className="text-sm text-emerald-700">{selectedFile.category} • {selectedFile.difficulty}</p>
              </div>
            </div>
            <button
              onClick={() => onFileSelect(selectedFile)}
              className="px-3 py-1 bg-emerald-600 text-white text-sm rounded-lg hover:bg-emerald-700 transition-colors"
            >
              Use This Scenario
            </button>
          </div>
        </div>
      )}

      {/* Voice Files List */}
      <div className="space-y-3 max-h-96 overflow-y-auto">
        {voiceFiles.map((file) => (
          <div
            key={file.id}
            className={`p-4 border rounded-lg transition-all cursor-pointer hover:border-emerald-300 hover:bg-emerald-50 ${
              selectedFile?.id === file.id
                ? 'border-emerald-500 bg-emerald-50'
                : 'border-gray-200'
            }`}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <h4 className="font-medium text-gray-900">{file.displayName}</h4>
                  <span className={`text-xs px-2 py-1 rounded-full border ${getDifficultyColor(file.difficulty)}`}>
                    {file.difficulty}
                  </span>
                </div>
                
                <p className="text-sm text-gray-600 mb-2">{file.description}</p>
                
                <div className="flex items-center space-x-4 text-xs text-gray-500">
                  <span className="flex items-center space-x-1">
                    <Star className="w-3 h-3" />
                    <span>{file.category}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{formatDuration(audioDurations[file.id] || 0)}</span>
                  </span>
                </div>
              </div>

              <div className="flex items-center space-x-2 ml-4">
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    playPreview(file)
                  }}
                  className="p-2 text-emerald-600 hover:bg-emerald-100 rounded-lg transition-colors"
                  title="Preview audio"
                >
                  {currentlyPlaying === file.id && isPlaying ? (
                    <Pause className="w-4 h-4" />
                  ) : (
                    <Play className="w-4 h-4" />
                  )}
                </button>
                
                <button
                  onClick={() => onFileSelect(file)}
                  className={`px-3 py-1.5 text-sm rounded-lg transition-colors ${
                    selectedFile?.id === file.id
                      ? 'bg-emerald-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {selectedFile?.id === file.id ? 'Selected' : 'Select'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Instructions */}
      <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <div className="flex items-start space-x-2">
          <AlertCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
          <div className="text-sm text-blue-800">
            <p className="font-medium mb-1">How to use:</p>
            <ol className="list-decimal list-inside space-y-1 text-blue-700">
              <li>Select a scenario from the library above</li>
              <li>Click "Use This Scenario" to load it</li>
              <li>Record your voice responding to the scenario</li>
              <li>Get AI-powered feedback on your response</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VoiceLibrary
