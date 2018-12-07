export const PYTHON_API_URL = 'http://0.0.0.0:8001'

export const handleHttpError = (error) => {
  console.log(error)
  const response = error.response
  console.log(response)
}