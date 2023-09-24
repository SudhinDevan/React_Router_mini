// import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"


export default function Github(){

  const data = useLoaderData()

  // const [data, setData] = useState([])
  // useEffect(()=>{
  //   fetch('https://api.github.com/users/sudhindevan')
  //   .then(response => response.json())
  //   .then(data => {
  //     setData(data)
  //   })
  // },[])

  return(
    <>
    <img src={data.avatar_url} className="w-72 p-4 mx-auto block" alt="github pic" />
    <h1 className="text-center text-3xl bg-green-300 text-gray-600 p-4 mb-3">Github followers: {data.followers}</h1>
    </>
  )
}

export const gitinfoloader  = async () => {
  const response = await fetch('https://api.github.com/users/sudhindevan')
  return response.json()
}