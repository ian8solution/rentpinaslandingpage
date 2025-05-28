"use client"
import { useRouter } from "next/router"

const App = () => {
  const router = useRouter()

  // Handle route changes
  router.events.on("routeChangeStart", (url) => {
    console.log("Route change started to: ", url)
  })

  router.events.on("routeChangeComplete", (url) => {
    console.log("Route change completed to: ", url)
  })

  router.events.on("routeChangeError", (err, url) => {
    console.error("Route change error to: ", url, err)
  })

  return (
    <div>
      <h1>Welcome to the Next.js App</h1>
      <p>
        This project uses Next.js-specific features like the App Router, built-in Image optimization, and file-based
        routing.
      </p>
      <p>
        Converting it to Vite would require significant restructuring and would lose compatibility with the v0 preview
        environment.
      </p>
      <p>Instead, I can help you with:</p>
      <ul>
        <li>Fixing errors in your code</li>
        <li>Providing guidance on Next.js best practices</li>
        <li>Assisting with troubleshooting and debugging</li>
      </ul>
    </div>
  )
}

export default App
