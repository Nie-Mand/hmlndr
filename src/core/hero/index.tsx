import { useHMLDNRLetter } from '~/core/hooks'
import { getQuote } from '~/core/utils'
import {
  SlSocialGithub as Github,
  SlSocialLinkedin as LinkedIn,
  RxPaperPlane as DM,
} from 'react-icons/all'
import { WithHelper } from '~/core/WithHelper'
import { HashLink } from 'react-router-hash-link'
import NIEMAND from './Niemand'

export default function Hero() {
  const hmldnr = useHMLDNRLetter()

  return (
    <div className="" id="top">
      <NIEMAND />
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
            <a href="https://github.com/Nie-Mand" target="_blank">
              <WithHelper
                text="Visit My GitHub @Nie-Mand"
                className="hero-social"
              >
                <Github className="" />
              </WithHelper>
            </a>

            <a href="https://www.linkedin.com/in/nie-mand/" target="_blank">
              <WithHelper
                text="Visit My LinkedIn 'Mohamed Sofiene'"
                className="hero-social"
              >
                <LinkedIn />
              </WithHelper>
            </a>
            <HashLink to="/#contact" smooth>
              <WithHelper text="Contact Me" className="hero-social">
                <DM className="-rotate-45" />
              </WithHelper>
            </HashLink>
          </div>
        </div>
      </div>
    </div>
  )
}
