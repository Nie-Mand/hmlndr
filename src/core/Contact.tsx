export default function Contact() {
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

        <div className="px-4 pt-20 py-10 grid grid-cols-2 gap-4">
          <label className="flex flex-col items-start space-y-3 col-span-2 md:col-span-1">
            <span className="text-sm">Name</span>
            <input type="text" className="input" name="name" />
          </label>
          <label className="flex flex-col items-start space-y-3 col-span-2 md:col-span-1">
            <span className="text-sm">Email</span>
            <input type="email" className="input" name="email" />
          </label>
          <label className="col-span-2 flex flex-col items-start space-y-3">
            <span className="text-sm">Object</span>
            <input type="text" className="input" name="object" />
          </label>

          <label className="col-span-2 flex flex-col items-start space-y-3">
            <span className="text-sm">Message</span>
            <textarea
              name="message"
              className="input resize-none h-20"
            ></textarea>
          </label>
          <div className="col-span-2 flex justify-end">
            <button className="hero-social text-sm">Send</button>
          </div>
        </div>
      </div>
    </div>
  )
}
