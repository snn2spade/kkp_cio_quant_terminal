import { Link, useLocation, useNavigate } from 'react-router-dom'
import { UserPlus } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { useAuth } from '@/auth/AuthContext'

function SignUpPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const { signUp } = useAuth()
  const [form, setForm] = useState({ username: '', password: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const from = location.state?.from?.pathname || '/'

  const handleSubmit = async (event) => {
    event.preventDefault()
    setError('')
    setLoading(true)
    try {
      await signUp(form)
      navigate(from, { replace: true })
    } catch (error) {
      setError(error.message || 'Unable to create account.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="p-4 max-w-[520px] mx-auto animate-fade-in">
      <Card className="border-border/50 bg-card/70 backdrop-blur-xl">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
              <UserPlus className="w-4 h-4 text-primary" />
            </div>
            <div>
              <CardTitle>Sign up</CardTitle>
              <p className="text-xs text-muted-foreground mt-1">New accounts start with the Analyst role.</p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-muted-foreground" htmlFor="username">Username</label>
              <Input
                id="username"
                value={form.username}
                onChange={(event) => setForm({ ...form, username: event.target.value })}
                autoComplete="username"
                required
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-muted-foreground" htmlFor="password">Password</label>
              <Input
                id="password"
                type="password"
                value={form.password}
                onChange={(event) => setForm({ ...form, password: event.target.value })}
                autoComplete="new-password"
                minLength={6}
                required
              />
            </div>
            {error && <p className="text-xs text-destructive">{error}</p>}
            <Button className="w-full" type="submit" disabled={loading}>
              {loading ? 'Creating account...' : 'Create account'}
            </Button>
          </form>
          <p className="text-xs text-muted-foreground mt-4">
            Already registered? <Link className="text-primary hover:underline" to="/signin" state={{ from: location.state?.from }}>Sign in</Link>
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

export default SignUpPage
