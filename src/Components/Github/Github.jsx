import gitinfoloader from "../../Link/Link"
import { useEffect, useState } from "react"

export default function Github(){

  const [data, setData] = useState([])

  useEffect(()=>{
    gitinfoloader()
    .then((data)=>{
      setData(data)
    })
  },[])

  return(
    <>
    <img src={data.avatar_url} className="w-72 p-4 mx-auto block" alt="github pic" />
    <div className="p-3 bg-green-300">
    <h1 className="text-center text-xl bg-green-300 text-gray-600">Name: {data.name}</h1>
    <h1 className="text-center text-xl bg-green-300 text-gray-600">Place: {data.location}</h1>
    <h1 className="text-center text-xl bg-green-300 text-gray-600 mb-3">Github followers: {data.followers}</h1>
    </div>
    </>
  )
}

