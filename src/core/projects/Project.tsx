import { WithHelper } from '../WithHelper'

export default function Project(props: ProjectProps) {
  return (
    <div>
      <WithHelper exists={!!props.note} text={props.note ?? ''}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="grid place-content-center p-4 col-span-2 md:col-span-1">
            <div className="w-full max-w-lg overflow-hidden rounded-lg">
              <img
                src={props.image}
                alt={props.title}
                className="project-image"
              />
            </div>
          </div>
          <div className="grid place-content-center col-span-2 md:col-span-1">
            <div className="grid gap-10">
              <div className="px-4 max-w-xl font-medium">
                <h1 className="text-xl md:text-2xl font-black mb-4">
                  {props.title}
                </h1>
                {props.description.map((line, idx) => (
                  <p key={idx}>
                    {line}
                    <br />
                  </p>
                ))}
              </div>
              <div className="px-4 flex items-center justify-center space-x-0 md:space-x-8 space-y-8 md:space-y-0 flex-col md:flex-row">
                {props.links.map((link, idx) => (
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={link.url}
                    key={idx}
                    className="hero-social text-sm text-black"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <div className="max-w-xl px-4 flex items-center justify-center flex-wrap">
                {props.tags.map((tag, idx) => (
                  <div
                    key={idx}
                    className="m-4 hero-social text-xs bg-black text-white"
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </WithHelper>
    </div>
  )
}

interface Url {
  url: string
  label: string
}

interface ProjectProps {
  title: string
  description: string[]
  image: string
  links: Url[]
  tags: string[]
  note: string | null
}
