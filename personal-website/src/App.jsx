import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Hi there, I'm Ioli!👋</h1>
        <p>🎓 I'm a student at the University of Washington, majoring in Computer Science with a minor in Business Administration. </p>
        <p>💻 I am experienced in web and app development, but love learning about everything! </p>
        <a href="mailto:iolis@cs.washington.edu">
          <p>📬 Email: iolis@cs.washington.edu </p>
        </a>
        <br></br>
        <p2>Languages: Python, Java, JavaScript, HTML, CSS, TypeScript</p2>
        <p2>Technologies & Frameworks: Figma, GitHub, Firebase, Microsoft Office</p2>
      </div>

      <div>
        <br></br>
        <a href="Ioli_Shrivastava_Resume.pdf" download="Ioli_Shrivastava_Resume.pdf">
          <button type="button">Download my Resume</button>
        </a>
        
        <a href="https://www.linkedin.com/in/ioli-shrivastava">
          <button type="button">Connect with me on LinkedIn</button>
        </a>
      </div>
    </>
  )
}

export default App
