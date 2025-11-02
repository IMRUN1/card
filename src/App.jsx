import { FaDiscord, FaYoutube, FaFacebook, FaGithub, FaReddit } from 'react-icons/fa';


function App() {
 

  return (
    <>
     <div className="card">
      <div className="box">
        <div className="profile"></div>
      </div>
      <div className="work">
          <h1>IMRUN</h1>
          <br />
          <h2> Aspiring Fullstack Developer</h2>
        </div>
        <div className="vv">
          <div className="exp">
            <h2>💼 What I Do</h2>
            <p className="ap">I create beautiful and functional web experiences. Passionate about coding, and bringing ideas to life. Always learning, always building.</p>
           </div>
        </div>
        <div className="ll">
            <div className="soc">
              <div className="a"><a href="https://github.com/IMRUN1" target="_blank" rel="noopener noreferrer">
               <FaGithub size={30} color="#333" />
              </a></div>
              <div className="b"><a href="https://www.reddit.com/user/IMRUN1234" target="_blank" rel="noopener noreferrer">
               <FaReddit size={30} color="#333" />
              </a></div>
              <div className="c"><a href="https://github.com" target="_blank" rel="noopener noreferrer">
               <FaYoutube size={30} color="#333" />
              </a></div>
              <div className="d"><a href="https://discord.gg/8YKJhaXuQN" target="_blank" rel="noopener noreferrer">
               <FaDiscord size={30} color="#333" />
              </a></div>
              
              
            </div>
           </div>
     </div>
    </>
  )
}

export default App
