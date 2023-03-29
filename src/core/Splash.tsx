export default function Splash(props: Props) {
  return (
    <div
      className={`${
        props.fixed ? 'fixed' : 'absolute'
      } h-screen w-screen text-center inset-0 bg-white grid place-content-center `}
    >
      <h1 className="text-center ">
        {props.label.split('').map((l, idx) => (
          <span
            key={idx}
            className={`logo-char z-10 ${
              l === '.' ? '' : 'logo-char-underline'
            } ${
              idx % 2 ? 'logo-char-underline-blue' : 'logo-char-underline-red'
            }`}
          >
            {l}
          </span>
        ))}
      </h1>

      <div
        className={`${
          props.fixed ? 'fixed' : 'absolute'
        } overflow-hidden w-screen top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 select-none`}
      >
        <h1 className="">
          {props.description.split('').map((l, idx) => (
            <span
              key={idx}
              className="text-[7rem] md:text-[14rem] font-black text-gray-100 duration-500 ease-out hover:ease-out hover:duration-500 hover:text-[10rem] md:hover:text-[20rem] hover:p-10"
            >
              {l}
            </span>
          ))}
        </h1>
      </div>
    </div>
  )
}

interface Props {
  label: string
  description: string
  fixed?: boolean
}
