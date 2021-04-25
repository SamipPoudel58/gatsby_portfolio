import React from "react"
import Layout from "../../components/Layout"
import { portfolio } from "../../styles/projects.module.css"

export default function Projects() {
  return (
    <Layout>
      <div className={portfolio}>
        <h1>Projects</h1>
        <h3>Projects & Websites I've Created</h3>
      </div>
    </Layout>
  )
}
