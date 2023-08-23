'use client'
import { useState } from "react"
import { signIn } from "next-auth/react"
import { useRouter } from 'next/navigation'

export default function Home() {

  const [form, setForm] = useState({
    email: '',
    password: '',
    redirect:false
  })

  const router = useRouter()

  const [error, setError] = useState('')

  const handleChange = (event) => {
    const {name, value} = event.target
    setForm(prevForm => {
      return {
        ...prevForm,
        [name]: value
      }
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const res = await signIn('credentials', form) 
      if(res.error) {alert('Invalid Credentials'); return}
      router.replace('dashboard')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 text-black">
      <form className="bg-white w-3/4 h-auto p-10 rounded-md" onSubmit={handleSubmit}>
        <div className="flex flex-row justify-between">
          <div>
            <label>Email</label>
            <input name="email" type="email" onChange={event => handleChange(event)} value={form.email} className="w-full border-slate-900 border-[1px] mt-2 p-2 rounded-md focus:outline-none" />
          </div>
          <div>
            <label>Password</label>
            <input name="password" type="password" onChange={event => handleChange(event)} value={form.password} className="w-full border-slate-900 border-[1px] mt-2 p-2 rounded-md focus:outline-none" />
          </div>
        </div>
        <div className="mt-10 flex justify-center text-white">
            <button  className=" w-40 h-auto p-4 rounded-md bg-blue-700">Sign In</button>
        </div>
      </form>
    </main>
  )
}
