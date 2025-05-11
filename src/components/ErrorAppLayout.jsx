import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorAppLayout = () => {
    const error = useRouteError();
    console.log(error)
  return (
    <>
    <h1>Something went wrong</h1>
    <div>This is the error Scrren. </div>
    </>
  )
}

export default ErrorAppLayout