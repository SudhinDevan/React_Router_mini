const gitinfoloader = async () => {
  const response = await fetch('https://api.github.com/users/sudhindevan')
  return response.json()
}

export default gitinfoloader;