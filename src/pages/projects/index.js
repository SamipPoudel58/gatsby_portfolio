import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../../components/Layout"
import { projects, portfolio } from "../../styles/projects.module.css"

export default function Projects({ data }) {
  const myprojects = data.projects.nodes
  const contact = data.contact.siteMetadata.contact
  return (
    <Layout>
      <div className={portfolio}>
        <h1>Projects</h1>
        <h3>Projects & Websites I've Created</h3>
        <div className={projects}>
          {myprojects.map(project => (
            <Link to={`/projects/${project.frontmatter.slug}`}>
              <div>
                <h3>{project.frontmatter.title}</h3>
                <p>{project.frontmatter.stack}</p>
              </div>
            </Link>
          ))}
        </div>
        <p>Like what you see ? Email me at {contact}</p>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ProjectsPage {
    projects: allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        frontmatter {
          slug
          title
          stack
        }
        id
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }
`
