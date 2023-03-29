export default function NIEMAND() {
  return (
    <div className="overflow-hidden  fixed top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 -z-0 select-none">
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
  )
}
