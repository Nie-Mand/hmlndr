import { Link } from 'react-router-dom'
import { WithHelper } from './WithHelper'

export default function About() {
  return (
    <div
      id="about"
      className="min-h-screen relative z-10 bg-black text-white py-32 grid place-content-center"
    >
      <div className="">
        <h1 className="text-center ">
          {'WHO AM I.'.split('').map((l, idx) => (
            <span key={idx} className="logo-char logo-char-3 text-4xl">
              {l}
            </span>
          ))}
        </h1>

        <div className="flex justify-center absolute top-0 right-0 opacity-40">
          <img src="/insat.png" alt="" className="h-80 mx-auto -rotate-12" />
        </div>

        <div className="grid grid-cols-2">
          <div className="grid place-content-center col-span-2 md:col-span-1">
            <div className="relative h-80 group">
              <svg
                className="w-40 h-40 absolute top-1/2 right-1/2 cool-animation-left-no-rotate"
                viewBox="0 0 394 406"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M394 0L259.019 210.609L394 406H0L134.981 199.652L0 0H394Z"
                  fill="#EE1D52"
                />
              </svg>
              <svg
                className="w-40 h-40 absolute top-1/2 right-1/2 z-[70] translate-x-1/2 -translate-y-1/2 group-active:scale-110 duration-300 ease-in-out"
                viewBox="0 0 394 406"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M394 0L259.019 210.609L394 406H0L134.981 199.652L0 0H394Z"
                  fill="white"
                />
              </svg>
              <svg
                className="w-40 h-40  absolute top-1/2 right-1/2 cool-animation-right-no-rotate"
                viewBox="0 0 394 406"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M394 0L259.019 210.609L394 406H0L134.981 199.652L0 0H394Z"
                  fill="#69C9D0"
                />
              </svg>
            </div>
          </div>
          <div className="grid place-content-center col-span-2 md:col-span-1">
            <div>
              <div className="px-4 pt-10 max-w-xl font-medium">
                My name is
                <span className="colored-red"> Mohammad Sofiane Barka </span>,
                I'm a <span className="colored-blue font-black"> Full </span>{' '}
                Stack <span className="colored-red"> Web </span> Developer and{' '}
                <span className="colored-red"> DevOps </span> Enthusiast.
                Sometimes I dig a little into{' '}
                <span className="colored-blue"> Blockchain </span> Technology
                and
                <span className="colored-red font-black">
                  {' '}
                  Cybersecurity{' '}
                </span>{' '}
                (Web Exploitation). I go to
                <a
                  href="https://goo.gl/maps/5L4zHZB98m4HnpQG8"
                  className="colored-blue"
                  target="_blank"
                >
                  {' '}
                  the National Institute of Applied Sciences and Technology
                  `Tunis`{' '}
                </a>
                , as known as{' '}
                <span className="colored-red font-black">INSAT</span>, where I
                study Networking and Telecommunication{' '}
                <span className="font-black">Engineering</span>.
                <br />
                <br />I have been an honorable member in the Association of
                Computer Machinery ACM for Contributing to the
                <WithHelper
                  className="inline"
                  text="Built it with Adam Lahbib, Deployed by Mohamed Rafraf, the gate into recognition"
                >
                  <span className="colored-blue">
                    {' '}
                    `Programming Battle Royale` Project{' '}
                  </span>
                </WithHelper>
                .I have contributed to many workshops, some of are Solidty
                Workshop with
                <WithHelper
                  className="inline"
                  text="Building the Club from Scratch with Nour Mami and Vicyyn 💫"
                >
                  <span className="colored-blue font-black">
                    {' '}
                    Dar Blockchain, the INSAT Chapter{' '}
                  </span>
                </WithHelper>
                , and
                <WithHelper
                  className="inline"
                  text="I tought CI/CD, Docker, Cloud Computing alongside my friend, Mohamed Ayadi"
                >
                  {' '}
                  <span className="colored-red">
                    Google Developers Student Club (GDSC INSAT) and Securinets{' '}
                  </span>
                  INSAT as DevOps and Cloud Instructor.
                </WithHelper>
                <br />
                <br />I have Interned as a{' '}
                <WithHelper
                  className="inline"
                  text="Basically doing React and Redux"
                >
                  <span className="colored-red">Frontend Developer</span> at
                  <span className="colored-blue"> Street Car Hub </span>
                </WithHelper>
                , a{' '}
                <WithHelper
                  className="inline"
                  text="Hackathon-like Internship, Won Best Team Award"
                >
                  <span className="colored-red">Blockchain Developer</span> at
                  <span className="colored-blue">
                    {' '}
                    Talan Innovation Factory{' '}
                  </span>
                </WithHelper>
                , and a{' '}
                <WithHelper
                  className="inline"
                  text="DevOps, Architecting and Experimenting"
                >
                  <span className="colored-red">
                    Site Reliability Engineering Intern
                  </span>{' '}
                  at{' '}
                  <span className="colored-blue">
                    {' '}
                    Vneuron Risk and Compliance{' '}
                  </span>
                  .{' '}
                </WithHelper>
                Spent Some Time as a{' '}
                <span className="colored-red">Platform Engineer</span> working
                with Kubernetes and Controllers at{' '}
                <span className="colored-blue">PCP Consulting</span>.
              </div>
            </div>
          </div>

          <div className="col-span-2">
            <div className="px-4 flex items-center justify-center pt-20 space-x-0 md:space-x-8 space-y-8 md:space-y-0 flex-col md:flex-row">
              <div className="hero-social text-sm text-black">
                Web Developer (React ❤️)
              </div>
              <div className="hero-social text-sm text-black">
                In Love with TS & Go
              </div>
              <div className="hero-social text-sm text-black">
                DevOps & Infra Guru
              </div>
              <div className="hero-social text-sm text-black">
                Cybersecurity Enthusiast
              </div>
              <div className="hero-social text-sm text-black">
                Blockchain Developer
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
