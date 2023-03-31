import Project from './Project'
import data from './data.json'
import { useFilter } from './hooks'

export default function Projects() {
  const { handleFilter, projects, filters } = useFilter()
  return (
    <div
      id="projects"
      className="bg-white py-32 min-h-screen relative z-10 grid place-content-center"
    >
      <div className="">
        <h1 className="text-center">
          {'PROJECTS & XPs.'.split('').map((l, idx) => (
            <span key={idx} className="logo-char logo-char-3 text-4xl">
              {l}
            </span>
          ))}
        </h1>

        <div className="px-4 py-10 flex items-center justify-center flex-wrap">
          {filters.map((filter, idx) => (
            <button
              key={idx}
              onClick={() => handleFilter(filter.value)}
              className="m-4 hero-social text-xs bg-black text-white"
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="px-4 pt-20 py-10 grid gap-10">
          {projects.map((project, idx) => (
            <Project key={idx} {...project} />
          ))}
          <div className="flex justify-center">
            <a
              href="https://github.com/Nie-Mand"
              target="_blank"
              rel="noreferrer noopener"
              className="m-4 hero-social text-xs text-black"
            >
              Checkout my Github for more projects
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
