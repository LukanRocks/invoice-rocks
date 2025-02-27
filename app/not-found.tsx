'use client'

// Next
import Error from 'next/error'

// Render the default Next.js 404 page when a route is requested that doesn't match the available ones.
// This also happens if a locale associated requested doesn't exist.
export default () => <Error statusCode={404} />
