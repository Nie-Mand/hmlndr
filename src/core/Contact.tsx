import axios from 'axios'
import toast from 'react-hot-toast'

function submit(data: any, then: () => void) {
  return axios
    .post('https://hmlndr-api.vercel.app/api/contact', data)
    .then(() => {
      toast.success("I'll get back to you ASAP!")
      then()
    })
    .catch(err => {
      toast.error('Something went wrong, please try again later.')
      then()
    })
}

export default function Contact() {
  const handleSubmit = (e: any) => {
    e.preventDefault()
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      object: e.target.object.value,
      message: e.target.message.value,
    }

    submit(data, () => {
      e.target.reset()
    })
  }
  return (
    <div
      className="relative z-10 bg-white h-screen grid place-content-center"
      id="contact"
    >
      <div className="">
        <h1 className="text-center">
          {'CONTACT ME.'.split('').map((l, idx) => (
            <span key={idx} className="logo-char logo-char-3 text-4xl">
              {l}
            </span>
          ))}
        </h1>

        <form
          className="px-4 pt-20 py-10 grid grid-cols-2 gap-4"
          onSubmit={handleSubmit}
        >
          <label className="flex flex-col items-start space-y-3 col-span-2 md:col-span-1">
            <span className="text-sm">Name</span>
            <input type="text" className="input" name="name" required />
          </label>
          <label className="flex flex-col items-start space-y-3 col-span-2 md:col-span-1">
            <span className="text-sm">Email</span>
            <input type="email" className="input" name="email" required />
          </label>
          <label className="col-span-2 flex flex-col items-start space-y-3">
            <span className="text-sm">Object</span>
            <input type="text" className="input" name="object" required />
          </label>

          <label className="col-span-2 flex flex-col items-start space-y-3">
            <span className="text-sm">Message</span>
            <textarea
              name="message"
              className="input resize-none h-20"
              required
            ></textarea>
          </label>
          <div className="col-span-2 flex justify-end">
            <button className="hero-social text-sm" type="submit">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
