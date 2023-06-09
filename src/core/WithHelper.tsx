export function WithHelper(props: {
  children: React.ReactNode
  text: string
  className?: string
  exists?: boolean
}) {
  if (props.exists === false) return <>{props.children}</>

  return (
    <div className={`group ${props.className ?? ''}`}>
      <div className="helper">{props.text}</div>
      {props.children}
    </div>
  )
}
