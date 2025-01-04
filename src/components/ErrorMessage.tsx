import { PropsWithChildren } from "react"

const ErrorMessage = ({children}: PropsWithChildren) => {
  return (
    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded my-4 ">
      {children}
    </div>
  )
}

export default ErrorMessage