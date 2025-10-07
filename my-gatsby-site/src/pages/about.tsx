import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 560,
}

const headingAccentStyles = {
  color: "#663399",
}

const paragraphStyles = {
  marginBottom: 48,
}

const sectionStyles = {
  marginBottom: 48,
}

const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}

const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}

const AboutPage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>
        About{" "}
        <span style={headingAccentStyles}>About ページ</span>
      </h1>
      
      <section style={sectionStyles}>
        <h2>Profile</h2>
        <p style={paragraphStyles}>
          Welcome to my portfolio website! I'm a developer passionate about creating 
          efficient and scalable web applications using modern technologies.
        </p>
      </section>

      <section style={sectionStyles}>
        <h2>Technical Skills</h2>
        <ul style={listStyles}>
          <li style={listItemStyles}>
            <strong>Frontend:</strong> React, TypeScript, Gatsby, Next.js
          </li>
          <li style={listItemStyles}>
            <strong>Styling:</strong> Tailwind CSS, SASS/SCSS, CSS-in-JS
          </li>
          <li style={listItemStyles}>
            <strong>Build Tools:</strong> Webpack, Vite, npm/pnpm
          </li>
          <li style={listItemStyles}>
            <strong>Other:</strong> Git, GraphQL, Static Site Generation
          </li>
        </ul>
      </section>

      <section style={sectionStyles}>
        <h2>Current Focus</h2>
        <p style={paragraphStyles}>
          Currently working on optimizing build processes and implementing 
          efficient asset management systems. This site demonstrates 
          incremental builds and organized JavaScript asset structure.
        </p>
      </section>

      <p style={paragraphStyles}>
        <a href="/">← Back to Home</a>
      </p>
    </main>
  )
}

export default AboutPage

export const Head: HeadFC = () => <title>About - Kota Ozawa</title>