import './App.css';
import Example1 from './Components/Adopt/Adopt';
import Example2 from "./Components/Experience"
import Example3 from "./Components/Breeds"
import Navbar from "./Components/Navbar"

export default function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <header className="App-header">
        <h1> Puppy World</h1>
        <h2> 
          Welcome to puppy world where everything is about puppies!!!
        </h2>
        

          <div>
            <Example1></Example1>
            <Example2></Example2>
            <Example3></Example3>
          </div>
          


        <a
          className="App-link"
          href="https://puppies.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Buy a puppy! =)
        </a>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc congue nisi vitae suscipit tellus mauris a. Elementum facilisis leo vel fringilla est. In ante metus dictum at tempor. Orci dapibus ultrices in iaculis nunc sed augue lacus. Arcu non sodales neque sodales ut etiam. Fermentum iaculis eu non diam phasellus vestibulum. Aliquet bibendum enim facilisis gravida. Risus at ultrices mi tempus imperdiet nulla. Vitae aliquet nec ullamcorper sit amet risus nullam. Donec ac odio tempor orci dapibus.</p>
      </header>
    </div>
  );
  }

