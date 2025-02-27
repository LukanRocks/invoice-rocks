// Next
import { notFound } from 'next/navigation'

// Any request to a non existing locale will send the users to not-found
export default () => notFound()
