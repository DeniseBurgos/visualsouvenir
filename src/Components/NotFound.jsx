
import { useRouteError, Link } from 'react-router-dom'

const NotFound = () => {
   const error = useRouteError()

  return (
    <div className=' text-slate-950 text-justify text-[50px]'>
            <h1>404</h1>
            <p>Page not found</p>
            <p>{error.statusText || error.message}</p>
            <Link to='/' className=' text-blue-900 underline'>Go back home</Link>
        </div>
  )
}

export default NotFound