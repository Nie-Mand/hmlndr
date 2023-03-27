import { useHMLDNRLetter } from './hooks'
import { getQuote } from './utils'
import {
  SlSocialGithub as Github,
  SlSocialLinkedin as LinkedIn,
  RxPaperPlane as DM,
} from 'react-icons/all'

export default function Hero() {
  const hmldnr = useHMLDNRLetter()

  return (
    <div className="">
      <div className="fixed top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 -z-0 select-none">
        <h1 className="">
          {'NIEMAND'.split('').map((l, idx) => (
            <span
              key={idx}
              className="text-[7rem] md:text-[14rem] font-black text-gray-100 duration-500 ease-out hover:ease-out hover:duration-500 hover:text-[10rem] md:hover:text-[20rem] hover:p-10"
            >
              {l}
            </span>
          ))}
        </h1>
      </div>
      <div className="h-screen grid place-content-center select-none">
        <div>
          <WithHelper text="Scroll Down">
            <h1 className="text-center">
              {'HMLNDR.'.split('').map((l, idx) => (
                <span
                  onMouseEnter={() => hmldnr.enter(l)}
                  onMouseLeave={hmldnr.out}
                  key={l}
                  className={`logo-char ${
                    l === '.' ? '' : 'logo-char-underline'
                  } ${
                    idx % 2
                      ? 'logo-char-underline-blue'
                      : 'logo-char-underline-red'
                  }`}
                >
                  {l}
                </span>
              ))}
            </h1>
          </WithHelper>

          <div className="mt-20 relative z-[1] select-none">
            <q className="flex items-center justify-center font-medium group">
              <div className="w-0 group-hover:w-4 duration-300 ease-in-out"></div>
              <span className="text-xl">{getQuote(hmldnr.l)}</span>
              <div className="w-0 group-hover:w-4 duration-300 ease-in-out"></div>
            </q>
          </div>

          <div className="pt-20 flex items-center justify-center space-x-6 relative z-[1]">
            <a href="#" target="_blank">
              <WithHelper
                text="Visit My GitHub @Nie-Mand"
                className="hero-social"
              >
                <Github className="" />
              </WithHelper>
            </a>

            <a href="#" target="_blank">
              <WithHelper
                text="Visit My LinkedIn 'Mohamed Sofiene'"
                className="hero-social"
              >
                <LinkedIn />
              </WithHelper>
            </a>
            <button>
              <WithHelper text="Contact Me" className="hero-social">
                <DM className="-rotate-45" />
              </WithHelper>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function WithHelper(props: {
  children: React.ReactNode
  text: string
  className?: string
}) {
  return (
    <div className={`group ${props.className ?? ''}`}>
      <div className="helper">{props.text}</div>
      {props.children}
    </div>
  )
}
