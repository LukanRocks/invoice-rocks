import { redirect } from 'next/navigation'

// This page only renders when the app is built statically (output: 'export')
export default () => {
  // TODO: Try to figure out a way to check for device language and default to that
  redirect('/en')
}
