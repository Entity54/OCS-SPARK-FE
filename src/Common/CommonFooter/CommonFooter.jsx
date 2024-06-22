import React from 'react'
import { Link } from 'react-router-dom'

const CommonFooter = () => {
  return (
    <footer className="px-4 d-flex justify-content-center align-items-center" >
    {/* <footer className="px-4 d-flex justify-content-center align-items-center" style={{ backgroundColor: 'red',  }}> */}
        <p className="mb-0 text-muted">
          {/* © 2023  */}
          {/* <Link to="https://Pixelwibes.com/" target="_blank" title="pixelwibes">
          pixelwibes
          </Link> */}
          Spark  Marketing in a brave new Web3 World
          {/* , All Rights Reserved. */}
          </p>
    </footer>
  )
}

export default CommonFooter



