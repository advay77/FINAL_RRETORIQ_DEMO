import React, { useState } from 'react';
import {
  TrendingUp,
  CheckCircle,
  AlertCircle,
  Clock,
  Target,
  Award,
  Lightbulb,
  MessageSquare,
  BarChart3,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

interface ExpandedSections {
  covered: boolean;
  missed: boolean;
  strengths: boolean;
  weaknesses: boolean;
  suggestions: boolean;
}

interface AnalysisResultsProps {
  analysis: any;
  className?: string;
}

export const AnalysisResults = ({
  analysis,
  className = ''
}: AnalysisResultsProps) => {
  const [expandedSections, setExpandedSections] = useState<ExpandedSections>({
    covered: false,
    missed: false,
    strengths: false,
    weaknesses: false,
    suggestions: false
  });

  const toggleSection = (section: keyof ExpandedSections) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const getScoreColor = (score = 0) => {
    if (score >= 80) return 'text-emerald-600';
    if (score >= 60) return 'text-amber-600';
    return 'text-rose-600';
  };

  const getProgressColor = (score = 0) => {
    if (score >= 80) return 'bg-gradient-to-r from-emerald-400 to-teal-500';
    if (score >= 60) return 'bg-gradient-to-r from-amber-400 to-orange-500';
    return 'bg-gradient-to-r from-rose-400 to-red-500';
  };

  const ScoreBar = ({ label, score = 0, icon }: { label: string; score?: number; icon: React.ReactNode }) => (
    <div className="flex items-center space-x-3 p-1">
      <div className="text-slate-400 flex-shrink-0 bg-white p-1.5 rounded-lg shadow-sm ring-1 ring-slate-100">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs font-semibold text-slate-700 truncate">{label}</span>
          <span className={`text-xs font-bold ${getScoreColor(score)} tabular-nums`}>{score}/100</span>
        </div>
        <div className="w-full bg-slate-200/70 rounded-full h-2 overflow-hidden ring-1 ring-inset ring-black/5">
          <div
            className={`h-full rounded-full transition-all duration-700 ease-out ${getProgressColor(score)}`}
            style={{ width: `${Math.max(score, 5)}%` }}
          />
        </div>
      </div>
    </div>
  );

  const formatDuration = (seconds = 0) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const data = analysis || {};
  const scores = data.scores || {};
  const timeManagement = data.timeManagement || { duration: 0, efficiency: 'N/A' };
  const keyPoints = data.keyPoints || { covered: [], missed: [] };
  const feedback = data.feedback || { strengths: [], weaknesses: [], suggestions: [], detailedFeedback: '' };

  return (
    <div className={`bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 p-6 ${className}`}>
      <div className="text-center mb-6">
        <div className="relative inline-flex mb-3">
          <div className="absolute inset-0 bg-indigo-400 blur-xl opacity-20 animate-pulse"></div>
          <div className="relative flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-600 via-purple-600 to-fuchsia-500 text-white text-2xl font-black shadow-lg shadow-indigo-200 ring-4 ring-white">
            {data.overallScore || 0}
          </div>
        </div>
        <h2 className="text-xl font-extrabold text-slate-900 tracking-tight">Interview Analysis</h2>
        <p className="text-sm text-slate-500 mt-1 font-medium">
          Comprehensive performance breakdown
        </p>
      </div>

      <div className="mb-6">
        <h3 className="text-sm font-bold text-slate-800 mb-3 flex items-center uppercase tracking-wider">
          <BarChart3 className="w-4 h-4 mr-2 text-indigo-500" />
          Core Metrics
        </h3>
        <div className="space-y-1 bg-slate-50/50 border border-slate-100 rounded-xl p-3">
          <ScoreBar label="Clarity & Articulation" score={scores.clarity} icon={<MessageSquare className="w-3.5 h-3.5" />} />
          <ScoreBar label="Relevance to Question" score={scores.relevance} icon={<Target className="w-3.5 h-3.5" />} />
          <ScoreBar label="Structure & Organization" score={scores.structure} icon={<TrendingUp className="w-3.5 h-3.5" />} />
          <ScoreBar label="Completeness" score={scores.completeness} icon={<CheckCircle className="w-3.5 h-3.5" />} />
          <ScoreBar label="Confidence & Delivery" score={scores.confidence} icon={<Award className="w-3.5 h-3.5" />} />
        </div>
      </div>

      <div className="mb-6">
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-4 shadow-md border border-slate-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2 text-indigo-400" />
              <span className="text-xs font-bold text-slate-300 uppercase tracking-widest">Time Mgmt</span>
            </div>
            <div className="flex gap-4">
              <div className="text-right">
                <p className="text-[10px] text-slate-500 uppercase font-bold">Duration</p>
                <p className="text-sm font-mono text-white">{formatDuration(timeManagement.duration)}</p>
              </div>
              <div className="text-right border-l border-slate-700 pl-4">
                <p className="text-[10px] text-slate-500 uppercase font-bold">Efficiency</p>
                <p className={`text-sm font-bold capitalize ${timeManagement.efficiency === 'excellent' ? 'text-emerald-400' :
                  timeManagement.efficiency === 'good' ? 'text-sky-400' :
                    timeManagement.efficiency === 'average' ? 'text-amber-400' :
                      'text-rose-400'
                  }`}>
                  {timeManagement.efficiency}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-sm font-bold text-slate-800 mb-3 flex items-center uppercase tracking-wider">
          <Target className="w-4 h-4 mr-2 text-indigo-500" />
          Content Coverage
        </h3>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-emerald-50/50 border border-emerald-100 rounded-xl p-3 shadow-sm">
            <h4 className="text-xs font-bold text-emerald-800 mb-2 flex items-center">
              <CheckCircle className="w-3.5 h-3.5 mr-1.5" />
              Covered ({keyPoints.covered?.length || 0})
            </h4>
            {keyPoints.covered?.length > 0 ? (
              <ul className="space-y-1.5">
                {keyPoints.covered.slice(0, expandedSections.covered ? undefined : 1).map((point: any, index: number) => (
                  <li key={index} className="text-[11px] text-emerald-700 flex items-start leading-relaxed font-medium">
                    <span className="mr-1.5 mt-0.5 text-emerald-500">●</span>
                    <span>{String(point)}</span>
                  </li>
                ))}
                {keyPoints.covered.length > 1 && (
                  <button onClick={() => toggleSection('covered')} className="text-[10px] text-emerald-600 font-bold flex items-center mt-1">
                    {expandedSections.covered ? <><ChevronUp className="w-3 h-3 mr-0.5" /> Less</> : <><ChevronDown className="w-3 h-3 mr-0.5" /> +{keyPoints.covered.length - 1} More</>}
                  </button>
                )}
              </ul>
            ) : <p className="text-[11px] text-emerald-600/70 italic">None</p>}
          </div>

          <div className="bg-rose-50/50 border border-rose-100 rounded-xl p-3 shadow-sm">
            <h4 className="text-xs font-bold text-rose-800 mb-2 flex items-center">
              <AlertCircle className="w-3.5 h-3.5 mr-1.5" />
              Missed ({keyPoints.missed?.length || 0})
            </h4>
            {keyPoints.missed?.length > 0 ? (
              <ul className="space-y-1.5">
                {keyPoints.missed.slice(0, expandedSections.missed ? undefined : 1).map((point: any, index: number) => (
                  <li key={index} className="text-[11px] text-rose-700 flex items-start leading-relaxed font-medium">
                    <span className="mr-1.5 mt-0.5 text-rose-400">●</span>
                    <span>{String(point)}</span>
                  </li>
                ))}
                {keyPoints.missed.length > 1 && (
                  <button onClick={() => toggleSection('missed')} className="text-[10px] text-rose-600 font-bold flex items-center mt-1">
                    {expandedSections.missed ? <><ChevronUp className="w-3 h-3 mr-0.5" /> Less</> : <><ChevronDown className="w-3 h-3 mr-0.5" /> +{keyPoints.missed.length - 1} More</>}
                  </button>
                )}
              </ul>
            ) : <p className="text-[11px] text-rose-600/70 italic">None</p>}
          </div>
        </div>
      </div>

      <div className="mb-6">
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-slate-50 border border-slate-100 rounded-xl p-3">
            <h4 className="text-[10px] font-black text-slate-400 mb-2 uppercase tracking-widest flex items-center">
              <CheckCircle className="w-3 h-3 mr-1.5 text-emerald-500" /> Strengths
            </h4>
            <ul className="space-y-1.5">
              {feedback.strengths?.slice(0, expandedSections.strengths ? undefined : 2).map((s: any, i: number) => (
                <li key={i} className="text-[11px] text-slate-700 flex items-start leading-snug">
                  <span className="text-emerald-500 mr-1.5 font-bold">·</span><span>{String(s)}</span>
                </li>
              ))}
              {feedback.strengths?.length > 2 && (
                <button onClick={() => toggleSection('strengths')} className="text-[10px] text-indigo-600 font-bold mt-1">
                  {expandedSections.strengths ? 'Less' : `+${feedback.strengths.length - 2} more`}
                </button>
              )}
            </ul>
          </div>

          <div className="bg-slate-50 border border-slate-100 rounded-xl p-3">
            <h4 className="text-[10px] font-black text-slate-400 mb-2 uppercase tracking-widest flex items-center">
              <TrendingUp className="w-3 h-3 mr-1.5 text-amber-500" /> Growth
            </h4>
            <ul className="space-y-1.5">
              {feedback.weaknesses?.slice(0, expandedSections.weaknesses ? undefined : 2).map((w: any, i: number) => (
                <li key={i} className="text-[11px] text-slate-700 flex items-start leading-snug">
                  <span className="text-amber-500 mr-1.5 font-bold">·</span><span>{String(w)}</span>
                </li>
              ))}
              {feedback.weaknesses?.length > 2 && (
                <button onClick={() => toggleSection('weaknesses')} className="text-[10px] text-indigo-600 font-bold mt-1">
                  {expandedSections.weaknesses ? 'Less' : `+${feedback.weaknesses.length - 2} more`}
                </button>
              )}
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h4 className="text-xs font-bold text-slate-800 mb-3 flex items-center uppercase tracking-wider">
          <Lightbulb className="w-3.5 h-3.5 mr-2 text-amber-500" /> Pro Suggestions
        </h4>
        <div className="space-y-2">
          {feedback.suggestions?.slice(0, expandedSections.suggestions ? undefined : 2).map((s: any, i: number) => (
            <div key={i} className="bg-amber-50/30 border-l-4 border-amber-400 p-3 rounded-r-lg">
              <p className="text-[11px] text-slate-700 leading-relaxed font-medium italic">"{String(s)}"</p>
            </div>
          ))}
          {feedback.suggestions?.length > 2 && (
            <button onClick={() => toggleSection('suggestions')} className="text-[10px] text-slate-500 font-bold px-1 mt-1">
              {expandedSections.suggestions ? 'View Less' : `View ${feedback.suggestions.length - 2} More Tips`}
            </button>
          )}
        </div>
      </div>

      {feedback.detailedFeedback && (
        <div className="mt-8 pt-6 border-t border-slate-100">
          <div className="bg-indigo-600 rounded-2xl p-5 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
            <h4 className="text-xs font-black text-indigo-100 mb-3 flex items-center uppercase tracking-[0.2em]">
              <Award className="w-4 h-4 mr-2" /> Expert Verdict
            </h4>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <p className="text-xs text-white leading-relaxed font-medium whitespace-pre-line">
                {String(feedback.detailedFeedback)}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AnalysisResults
