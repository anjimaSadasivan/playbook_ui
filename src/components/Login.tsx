import { useEffect } from 'react'
import { DefaultButton } from './commons/Button'
import { buildGithuburl } from '../config/values'
import { useSearchParams } from 'react-router-dom'
export const AppLogin = () => {
  // Use the globally available crypto object
  const uuid = crypto.randomUUID()
  const [searchParams] = useSearchParams()

  useEffect(() => {
    const code = searchParams.get('code')
    // const state = searchParams.get('state')
    if (code) {
      gitAuth(code)
    }
  }, [searchParams])

  const handleClick = () => {
    const client_id = import.meta.env.VITE_GITHUB_CLIENT_ID
    const state = uuid
    const githuburl = buildGithuburl(client_id, state)
    window.location.href = githuburl
  }

  //pass state and code in the post login route
  const gitAuth = async (code: string) => {
    try {
      const response = await fetch('http://localhost:8000/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code: code }),
      })
      console.log({ response })
    } catch (error: any) {
      console.error('message: Github login failed', error.message)
      throw error
    }
  }

  return (
    <>
      <DefaultButton
        name="Login with Github"
        onClick={handleClick}
      ></DefaultButton>
    </>
  )
}
