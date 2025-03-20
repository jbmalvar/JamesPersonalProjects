import yellowGibus from './assets/yellowGibus.webp'
import James from './assets/James.jpg'
import './App.css'

function App() {
  return (
    <div className="App">
        <nav className = "JamesNav">
          <img src = {yellowGibus} className = "jamesLogo"></img>
          <h2 className = "barCat">About</h2>
          <h2 className = "barCat">Projects</h2>
          <h2 className = "barCat">Skills</h2>
          <h2 className = "right">Contact Me</h2>
          <a href="https://www.linkedin.com/in/james-joshua-malvar/" target="_blank" rel="noopener noreferrer">
            <img src="https://www.shareicon.net/data/2016/07/13/606885_linkedin_2048x2048.png" className="contacts" />
          </a>
          <a href="https://github.com/jbmalvar" target="_blank" rel="noopener noreferrer">
            <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/600px-Octicons-mark-github.svg.png?20180806170715" className = "contacts"/>
          </a>
        </nav>
        <div className = "JamesIntro">
          <span className = 'James'>
            <h1>James Malvar</h1>
            <h2>Software Engineer, Fullstack Engineer</h2>
            <img src = {James}></img>
          </span>
          <span className = "JamesDesc">
            <p>Hey, What's up, I'm James</p>
            <p>Thanks for taking a look at my website</p>
            <p>Come take a look at my personal projects</p>
            <p>Current Project: Personal Portfolio</p>
          </span>
        </div>
        <div className = "SkillsContainer">
            <h1>Skills</h1>
        </div>
    </div>
  )
}

export default App
