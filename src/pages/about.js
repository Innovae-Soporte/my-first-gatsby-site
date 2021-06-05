// Step 1: Import your component
import { Link } from 'gatsby'
import * as React from 'react'
import Layout from '../components/layout'
// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="About me">
      <p>Creando mediante layuot una página de about</p>
    </Layout>
  )
}
// Step 3: Export your component
export default AboutPage