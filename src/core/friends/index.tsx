import { WithHelper } from '../WithHelper'

export default function Friends() {
  return (
    <div className="min-h-screen relative z-10 bg-black text-white py-32 grid place-content-center">
      <div className="">
        <h1 className="text-center ">
          {'TOP NETWORK.'.split('').map((l, idx) => (
            <span key={idx} className="logo-char logo-char-3 text-4xl">
              {l}
            </span>
          ))}
        </h1>

        <div className="grid grid-cols-2 py-20">
          <div className="relative h-80 col-span-2 md:col-span-1 group">
            <div className="bg-[#EE1D52] w-56 h-56 absolute top-[40%] right-1/2 translate-x-[70%] -translate-y-1/2 rotate-3"></div>
            <img
              src="/network/alaa.jpeg"
              alt="Alaa Barka"
              className="bg-white w-56 h-56 absolute top-1/2 right-1/2 z-[70] translate-x-1/2 -translate-y-1/2 group-active:scale-110 duration-300 ease-in-out"
            />
            <div className="bg-[#69C9D0] w-56 h-56 absolute top-[60%] right-1/2 translate-x-[30%] -translate-y-1/2 rotate-3"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
