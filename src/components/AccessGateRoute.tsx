import React, { useEffect, useState } from 'react'
import AccessGate from '../pages/AccessGate'

interface AccessGateRouteProps {
    children: React.ReactNode
}

const AccessGateRoute = ({ children }: AccessGateRouteProps) => {
    const [isVerified, setIsVerified] = useState(() => (
        typeof window !== 'undefined'
        && window.localStorage.getItem('accessGateVerified') === 'true'
    ))

    useEffect(() => {
        const handleVerified = () => {
            setIsVerified(typeof window !== 'undefined'
                && window.localStorage.getItem('accessGateVerified') === 'true')
        }

        window.addEventListener('accessGateVerified', handleVerified)
        return () => window.removeEventListener('accessGateVerified', handleVerified)
    }, [])

    if (!isVerified) {
        return <AccessGate />
    }

    return <>{children}</>
}

export default AccessGateRoute
