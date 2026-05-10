import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import apiService from '@/lib/api'

const AuthContext = createContext(null)
const AUTH_STORAGE_KEY = 'cio-quant-auth-session'

function readStoredSession() {
  try {
    const rawSession = localStorage.getItem(AUTH_STORAGE_KEY)
    if (!rawSession) return null

    const session = JSON.parse(rawSession)
    if (!session?.token || !session?.expiresAt) return null

    if (new Date(session.expiresAt).getTime() <= Date.now()) {
      localStorage.removeItem(AUTH_STORAGE_KEY)
      return null
    }

    return session
  } catch (error) {
    localStorage.removeItem(AUTH_STORAGE_KEY)
    return null
  }
}

function storeSession(session) {
  localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(session))
}

export function AuthProvider({ children }) {
  const [session, setSession] = useState(() => readStoredSession())
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    const refreshUser = async () => {
      if (!session?.token) {
        setIsReady(true)
        return
      }

      try {
        const data = await apiService.getCurrentUser(session.token)
        const refreshedSession = { ...session, user: data.user }
        setSession(refreshedSession)
        storeSession(refreshedSession)
      } catch (error) {
        localStorage.removeItem(AUTH_STORAGE_KEY)
        setSession(null)
      } finally {
        setIsReady(true)
      }
    }

    refreshUser()
  }, [])

  const signIn = async ({ username, password }) => {
    const data = await apiService.signIn({ username, password })
    const nextSession = {
      token: data.token,
      expiresAt: data.expires_at,
      user: data.user,
    }
    setSession(nextSession)
    storeSession(nextSession)
    return nextSession
  }

  const signUp = async ({ username, password }) => {
    const data = await apiService.signUp({ username, password })
    const nextSession = {
      token: data.token,
      expiresAt: data.expires_at,
      user: data.user,
    }
    setSession(nextSession)
    storeSession(nextSession)
    return nextSession
  }

  const signOut = async () => {
    const token = session?.token
    localStorage.removeItem(AUTH_STORAGE_KEY)
    setSession(null)
    if (token) {
      try {
        await apiService.signOut(token)
      } catch (error) {
        console.error('Failed to sign out on server:', error)
      }
    }
  }

  const value = useMemo(() => ({
    isReady,
    isAuthenticated: Boolean(session?.user),
    session,
    user: session?.user || { username: 'Guest', role: 'Guest' },
    signIn,
    signUp,
    signOut,
  }), [isReady, session])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}
