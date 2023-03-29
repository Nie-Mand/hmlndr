export default function Loading() {
  return (
    <div className="relative">
      <svg
        className="w-20 h-20 absolute top-1/2 right-1/2 cool-animation-left"
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
        className="w-20 h-20 absolute top-1/2 right-1/2 z-[70] cool-animation-rotating"
        viewBox="0 0 394 406"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M394 0L259.019 210.609L394 406H0L134.981 199.652L0 0H394Z"
          fill="black"
        />
      </svg>
      <svg
        className="w-20 h-20  absolute top-1/2 right-1/2 cool-animation-right"
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
  )
}

export function FullLoading() {
  return (
    <div className="fixed inset-0 bg-white grid place-content-center z-[69]">
      <Loading />
    </div>
  )
}
