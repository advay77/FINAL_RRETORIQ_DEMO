import { useMemo, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Mail, ShieldCheck, ArrowRight, Loader } from 'lucide-react'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../lib/firebase'

const ACCESS_VERIFIED_KEY = 'accessGateVerified'

const getSafeNextPath = (value: string | null) => {
    if (!value) return null
    return value.startsWith('/') ? value : null
}

const AccessGate = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [status, setStatus] = useState<'idle' | 'checking'>('idle')
    const [error, setError] = useState<string | null>(null)
    const [message, setMessage] = useState<string | null>(null)

    const nextPath = useMemo(() => {
        const params = new URLSearchParams(location.search)
        const nextParam = getSafeNextPath(params.get('next'))
        const statePath = (location.state as { from?: { pathname?: string } } | undefined)?.from?.pathname
        return getSafeNextPath(statePath || null) || nextParam || '/login'
    }, [location.search, location.state])

    const normalizeEmail = (value: string) => value.trim().toLowerCase()

    const handleAccessCheck = async () => {
        const normalizedEmail = normalizeEmail(email)
        if (!normalizedEmail) return
        setError(null)
        setMessage(null)
        setStatus('checking')

        try {
            const allowedRef = doc(db, 'allowed_emails', normalizedEmail)
            const snapshot = await getDoc(allowedRef)

            if (!snapshot.exists()) {
                setError('This email is not on the approved list. Please contact support.')
                setStatus('idle')
                return
            }

            window.localStorage.setItem(ACCESS_VERIFIED_KEY, 'true')
            window.dispatchEvent(new Event('accessGateVerified'))
            setMessage('Email verified. Redirecting to sign in...')
            const redirectPath = nextPath.startsWith('/login') ? '/login?verified=1' : nextPath
            navigate(redirectPath, { replace: true })
        } catch (err) {
            console.error('Access gate check failed:', err)
            setError('Could not verify access. Please try again.')
        } finally {
            setStatus('idle')
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 text-gray-900 flex items-center justify-center px-4 py-10">
            <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
                <div className="px-8 py-10">
                    <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-600 text-white shadow-lg">
                        <ShieldCheck className="w-7 h-7" />
                    </div>
                    <h1 className="mt-6 text-3xl font-semibold tracking-tight">Enter your email to continue</h1>
                    <p className="mt-3 text-sm text-gray-600">
                        Access is limited to approved student emails.
                    </p>

                    <div className="mt-6 space-y-4">
                        <label className="block text-sm font-medium text-gray-700" htmlFor="access-email">
                            Email address
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Mail className="w-4 h-4 text-gray-400" />
                            </div>
                            <input
                                id="access-email"
                                type="email"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                placeholder="you@company.com"
                                className="w-full pl-9 pr-4 py-3 border border-slate-200 rounded-xl shadow-sm placeholder-gray-400 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                            />
                        </div>

                        {error && (
                            <div className="rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-xs text-red-700">
                                {error}
                            </div>
                        )}

                        {message && (
                            <div className="rounded-xl border border-blue-100 bg-blue-50 px-4 py-3 text-xs text-blue-700">
                                {message}
                            </div>
                        )}
                        <div className="space-y-3">
                            <button
                                type="button"
                                onClick={handleAccessCheck}
                                disabled={!email || status !== 'idle'}
                                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60"
                            >
                                {status === 'checking' ? (
                                    <Loader className="w-4 h-4 animate-spin" />
                                ) : (
                                    <ArrowRight className="w-4 h-4" />
                                )}
                                Continue
                            </button>
                        </div>
                    </div>

                    <p className="mt-6 text-xs text-gray-500">
                        Once verified, you can continue to sign in or sign up.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AccessGate
