import { useParams } from "react-router-dom"


export default function User () {
  const {userId} = useParams()
  return(
    <h1 className="text-white text-center bg-green-300 text-3xl p-3">User: {userId} </h1>
  )
}