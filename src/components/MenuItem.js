import Link from 'next/link'
import React from 'react'

const MenuItem = ({mn}) => {
  return (
    <Link className="pt-4" href={mn.path}>{mn.name}</Link>
  )
}

export default MenuItem