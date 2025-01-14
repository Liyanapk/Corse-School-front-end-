'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div style={{ padding: '20px', textAlign: 'center', color: 'red' }}>
      <h1>Something went wrong!</h1>
      <p>{error.message}</p>
      <button onClick={() => reset()} style={{ marginTop: '10px', padding: '10px', backgroundColor: '#007BFF', color: '#FFF' }}>
        Try Again
      </button>
    </div>
  )
}
