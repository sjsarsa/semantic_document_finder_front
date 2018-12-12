export const PYTHON_API_URL = 'http://127.0.0.1:3010'

export const handleHttpError = (error) => {
  console.log(error)
  const response = error.response
  console.log(response)
}