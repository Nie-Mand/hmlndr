import { Link } from 'react-router-dom'

export default function Extra() {
  return (
    <div className="relative z-10 bg-black text-white py-32 grid place-content-center">
      <div className="">
        <h1 className="text-center ">
          {'NON TECHNICAL STUFF.'.split('').map((l, idx) => (
            <span key={idx} className="logo-char logo-char-3 text-4xl">
              {l}
            </span>
          ))}
        </h1>

        <p className="px-4 text-center pt-10">
          Explore my friends, music taste, and other non-technical stuff. If
          you're interested
        </p>

        <div className="px-4 flex items-center justify-center pt-20">
          <Link to="/extra" className="hero-social text-sm text-black">
            Friends, Music Taste, etc.
          </Link>
        </div>
      </div>
    </div>
  )
}
