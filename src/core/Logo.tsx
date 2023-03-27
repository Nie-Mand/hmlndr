import { HashLink } from 'react-router-hash-link'

export default function Logo() {
  return (
    <HashLink
      className="text-center group active:text-[#EE1D52]"
      to="/#top"
      smooth
    >
      {'HMLNDR.'.split('').map((l, idx) => (
        <span
          key={l}
          className={`relative mx-2 duration-200 ease-in-out text-xl font-bold ${
            idx % 2 ? 'hover:text-[#69C9D0]' : 'hover:text-[#EE1D52]'
          }`}
        >
          {l}
        </span>
      ))}
    </HashLink>
  )
}
