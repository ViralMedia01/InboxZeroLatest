import { supabase } from '@/utils/supabaseClient'

export default function Home() {
  return (
    <main className="p-10">
      <h1 className="text-2xl font-bold">InboxZero + Supabase</h1>
      <p className="mt-4 text-gray-700">You're now connected to Supabase 🎉</p>
    </main>
  )
}