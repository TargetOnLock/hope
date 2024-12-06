import logo from './Hope.png';
import './App.css';
import { FaTwitter, FaTelegramPlane } from 'react-icons/fa';
import walletLogo from './metamask.png';
import baseEthLogo from './base.png';
import uniswapLogo from './uniswap.png';
import React, { useEffect } from 'react';

// Function to create shooting stars
const createShootingStar = () => {
  const star = document.createElement('div');
  star.className = 'shooting-star';
  star.style.left = `${Math.random() * 100}vw`;
  star.style.top = `${Math.random() * 100}vh`;
  star.style.animationDuration = `${Math.random() * 1 + 0.5}s`; // Random duration
  document.querySelector('.stars-container').appendChild(star);
  setTimeout(() => {
    star.remove(); // Remove star after animation
  }, 1000); // Match with animation duration
};

function App() {
  useEffect(() => {
    const interval = setInterval(createShootingStar, 300); // Create a star every 300ms
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="App">
      <div className="stars-container"></div> {/* Stars container */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to Based Hope Token!</h1>
        <p>Join the revolution of hope and memes!</p>
        <div className="socials">
          <a href="https://x.com/HopeOnBase" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="social-icon" />
          </a>
          <a href="https://t.me/HopeProjectPortal" target="_blank" rel="noopener noreferrer">
            <FaTelegramPlane className="social-icon" />
          </a>
        </div>
      </header>
      <main>
      <section className="about">
        <h2>About Based Hope Token</h2>
        <div className="about-item">
          <p>
            Based Hope Token is not just a cryptocurrency; it's a movement! Our mission is to bring joy, hope, and a sense of community to the blockchain space. We believe in the power of memes to unite people and spread positivity.
          </p>
          <img src={`${process.env.PUBLIC_URL}/OIP (1).jpg`} alt="Meme 1" className="about-meme" />
        </div>
        <div className="about-item">
          <p>
            At Based Hope, we are committed to creating a vibrant community where everyone can participate, share ideas, and contribute to the growth of our ecosystem. We encourage our members to engage with us on social media, share their thoughts, and help us shape the future of Based Hope Token.
          </p>
          <img src={`${process.env.PUBLIC_URL}/OIP (2).jpg`} alt="Meme 2" className="about-meme" />
        </div>
        <div className="about-item">
          <p>
            Join us in our journey to make the blockchain a brighter place! Whether you're a seasoned crypto enthusiast or just starting out, there's a place for you in our community. Together, we can create something truly special.
          </p>
          <img src={`${process.env.PUBLIC_URL}/OIP (3).jpg`} alt="Meme 3" className="about-meme" />
        </div>
        <div className="about-item">
          <p>
            Stay connected with us through our social media channels, participate in community events, and don't hesitate to reach out with your ideas and feedback. Your voice matters, and we want to hear from you!
          </p>
          <img src={`${process.env.PUBLIC_URL}/OIP (4).jpg`} alt="Meme 4" className="about-meme" />
        </div>
      </section>
        <section className="tokenomics">
          <h2>Tokenomics</h2>
          <div className="tokenomics-details">
            <div className="tokenomics-item">
              <h3>Total Supply</h3>
              <p><strong>1,000,000,000</strong></p>
            </div>
            <div className="tokenomics-item">
              <h3>Token Ticker</h3>
              <p><strong>$HOPE</strong></p>
            </div>
            <div className="tokenomics-item">
              <h3>Transaction Tax</h3>
              <p><strong>0%</strong></p>
            </div>
          </div>
        </section>
        <section className="how-to-buy">
          <h2>How to Buy</h2>
          <p>Follow these simple steps to get your $HOPE tokens:</p>
          <div className="how-to-buy-steps">
            <div className="how-to-buy-item">
              <img src={walletLogo} alt="Wallet Logo" className="buy-logo" />
              <p>Create a Wallet and connect to Base.</p>
            </div>
            <div className="how-to-buy-item">
              <img src={baseEthLogo} alt="Base ETH Logo" className="buy-logo" />
              <p>Fund your wallet with Base ETH.</p>
            </div>
            <div className="how-to-buy-item">
              <img src={uniswapLogo} alt="Uniswap Logo" className="buy-logo" />
              <p>Swap your tokens on Uniswap.</p>
            </div>
          </div>
          <a
            className="App-link"
            href="https://app.uniswap.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Start Buying $HOPE
          </a>
        </section>
        <section className="community">
          <h2>Join the Meme Revolution!</h2>
          <p>Share your best memes with us and get featured!</p>
          <a
            className="App-link"
            href="https://your-meme-submission-link.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Submit Your Meme
          </a>
          <div className="meme-gallery">
            <img src={`${process.env.PUBLIC_URL}/OIP (5).jpg`} alt="Meme 5" className="gallery-meme" />
            <img src={`${process.env.PUBLIC_URL}/OIP (6).jpg`} alt="Meme 6" className="gallery-meme" />
            <img src={`${process.env.PUBLIC_URL}/OIP (7).jpg`} alt="Meme 7" className="gallery-meme" />
            <img src={`${process.env.PUBLIC_URL}/OIP (8).jpg`} alt="Meme 8" className="gallery-meme" />
            <img src={`${process.env.PUBLIC_URL}/OIP (9).jpg`} alt="Meme 9" className="gallery-meme" />
            <img src={`${process.env.PUBLIC_URL}/OIP (10).jpg`} alt="Meme 10" className="gallery-meme" />
            <img src={`${process.env.PUBLIC_URL}/OIP (11).jpg`} alt="Meme 11" className="gallery-meme" />
            <img src={`${process.env.PUBLIC_URL}/OIP (12).jpg`} alt="Meme 12" className="gallery-meme" />
            <img src={`${process.env.PUBLIC_URL}/OIP (13).jpg`} alt="Meme 13" className="gallery-meme" />
            <img src={`${process.env.PUBLIC_URL}/OIP (14).jpg`} alt="Meme 14" className="gallery-meme" />
            <img src={`${process.env.PUBLIC_URL}/OIP (15).jpg`} alt="Meme 15" className="gallery-meme" />
            <img src={`${process.env.PUBLIC_URL}/OIP (16).jpg`} alt="Meme 16" className="gallery-meme" />
          </div>
        </section>
      </main>
      <footer>
        <p>© 2024 Based Hope Token. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;