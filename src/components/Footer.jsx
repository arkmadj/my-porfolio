import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer>
      <Layout>
        <span>Rights</span>
        <Link href="/">Zultan</Link>
        <Link href="/">Say hello</Link>
      </Layout>
    </footer>
  )
}

export default Footer