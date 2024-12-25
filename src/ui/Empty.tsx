import { ReactNode } from "react"

interface EmptyPropType{
    children:ReactNode
}

const Empty = ({children}:EmptyPropType) => {
  return (
    <div className="text-center w-full text-2xl font-bold py-6">
        <span>{children}</span>
       
    </div>
  )
}

export default Empty