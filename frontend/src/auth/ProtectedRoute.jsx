import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import { Lock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { useAuth } from '@/auth/AuthContext'

function ProtectedRoute({ children }) {
  const location = useLocation()
  const navigate = useNavigate()
  const { isReady, isAuthenticated } = useAuth()

  if (!isReady) {
    return <div className="p-4 text-muted-foreground">Checking session...</div>
  }

  if (!isAuthenticated) {
    return (
      <div className="p-4 max-w-[900px] mx-auto animate-fade-in">
        <Card className="border-border/50 bg-card/60 backdrop-blur-xl">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
                <Lock className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="text-lg font-semibold text-foreground">Sign in required</h2>
                <p className="text-sm text-muted-foreground mt-1">
                  Guest mode can browse public market and research content. This page uses private user data.
                </p>
                <div className="flex gap-2 mt-4">
                  <Button onClick={() => navigate('/signin', { state: { from: location } })}>
                    Sign in
                  </Button>
                  <Button variant="outline" onClick={() => navigate('/signup', { state: { from: location } })}>
                    Sign up
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return children || <Navigate to="/" replace />
}

export default ProtectedRoute
