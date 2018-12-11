export const PYTHON_API_URL = 'https://127.0.0.1:12000'

export const handleHttpError = (error) => {
  console.log(error)
  const response = error.response
  console.log(response)
}