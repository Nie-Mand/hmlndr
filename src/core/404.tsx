import Splash from './Splash'

export default function NotFound() {
  return (
    <div className="h-screen absolute z-20">
      <Splash label="NOT FOUND." description="404" fixed />
    </div>
  )
}
