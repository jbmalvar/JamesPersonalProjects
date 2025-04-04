import { useEffect, useState} from 'react'
import yellowGibus from './assets/yellowGibus.webp'
import James from './assets/James.jpg'
import MaoMao from './assets/MaoMao.gif'
// import Left from './assets/Left.png'
// import Right from './assets/Right.png'
// import AboutContainer from './components/AboutContainer';
// import Center from './assets/Middle.png'
import './App.css'

function App() {
  const scrollTo = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (sectionId === "about-section") {
      const yOffset = -200; // Adjust this value as needed
      if (section) {
        const yPosition = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: yPosition, behavior: 'smooth' });
      }
    }
  };

  const [maoMaoOffset, setMaoMaoOffset] = useState(0); // State to track MaoMao's position

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Dynamically calculate MaoMao's height based on 10vw
      const maoMaoHeight = window.innerWidth * 0.1; // 10vw in pixels
      const whiteLineHeight = 90; // Height of the white line (border-bottom)
      const maxOffset = maoMaoHeight + whiteLineHeight; // Ensure MaoMao fully disappears
      const newOffset = Math.min(scrollY, maxOffset);
      setMaoMaoOffset(newOffset); // Update MaoMao's position
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className="App">
        <nav className = "JamesNav">
          <img src = {yellowGibus} className = "jamesLogo"></img>
          <h2 className = "barCat" onClick={() => scrollTo("about-section")}>About</h2>
          <h2 className = "barCat" onClick={() => scrollTo("skills-section")}>Skills</h2>
          <h2 className = "barCat">Projects</h2>
          <h2 className = "right">Contact Me</h2>
          <a href="https://www.linkedin.com/in/james-joshua-malvar/" target="_blank" rel="noopener noreferrer">
            <img src="https://www.shareicon.net/data/2016/07/13/606885_linkedin_2048x2048.png" className="contacts" />
          </a>
          <a href="https://github.com/jbmalvar" target="_blank" rel="noopener noreferrer">
            <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/600px-Octicons-mark-github.svg.png?20180806170715" className = "contacts"/>
          </a>
        </nav>
        <div className="JamesIntro">
          <span className="James">
            <h1>Hello, My name is </h1>
            <h1>James Malvar</h1>
            <h2>Software Engineer, Fullstack Engineer</h2>
            <img src={James} className="JamesImg" alt="James" />
          </span>
          <span className="JamesDesc">
            <p>Hey, I'm James, I'm a first generation Filipino Student</p>
            <p>Thanks for taking a look at my website</p>
            <p>Come take a look at my personal projects</p>
            <p>Current Project: Personal Portfolio</p>
            <img 
              src={MaoMao} 
              className="MaoMao" 
              style={{ transform: `translateY(${maoMaoOffset}px)` }} 
              alt="MaoMao Animation"
            />
          </span>
        </div>
    </div>
  )
}

export default App;

/*<h1>About Me</h1>
            <p>I’m James as you can tell from above. I’m currently attending the University of Washington and I’m a Computer Science Major. I’m a third year there. I’m currently looking for an internship or some sort of experience.</p>
            <p>I have a few hobbies. I watch anime and play a lot of video games. One of my favorite anime currently is Kusuriya No Hitorigoto. I love play video games as well and will play multiplayer games with friends regardless of the content. My favorite genre of single player games are turn based games. I’ve played the Persona series, Baldur’s Gate 3, and Fear and Hunger. Games I’ve enjoyed thoroughly.</p>
            <p>Enough about though, come learn about my skills and what I’ve worked on. If you’d like to contact me, check above.</p> */