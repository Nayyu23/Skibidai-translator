import React, { useState, useEffect } from 'react';
import LandingPage from './LandingPage'; // Import the LandingPage component
import AboutMe from './AboutMe'; // Import the AboutMe component

function App() {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [sourceLanguage, setSourceLanguage] = useState('en');
  const [targetLanguage, setTargetLanguage] = useState('al');
  const [aboutMeVisible, setAboutMeVisible] = useState(false); // State for About Me visibility
  const [lastScrollTop, setLastScrollTop] = useState(0); // Initialize lastScrollTop state

  const dictionary = {  
    en: {
      al: {
        skibidi: 'good',
        ohio: 'bad',
        sigma: 'cool',
        bussin: 'very good',
        cap: 'lie',
        drip: 'impressive style',
        slay: 'perform exceptionally well',
        bet: 'okay!',
        mood: 'relatable',
        simp: 'person who is overly attentive to someone',
        cheugy: 'outdated',
        stan: 'obsessed fan',
        sus: 'suspicious',
        fire: 'amazing',
        flex: 'show off',
        ghosting: 'cutting off communication',
        lit: 'exciting',
        w: 'win',
        l: 'loss',
        ratio: 'negative response outshines',
        yeet: 'throw',
        fam: 'close friends',
        goat: 'greatest of all time',
        bruh: 'expression of disbelief',
        salty: 'bitter',
        lowkey: 'done subtly',
        highkey: 'obviously',
        snack: 'attractive person',
        cancel: 'stop supporting',
        clout: 'online influence',
        drag: 'harsh criticism',
        noob: 'inexperienced person',
        troll: 'provocateur',
        shook: 'shocked',
        thirsty: 'desperate for attention',
        receipts: 'proof',
        karen: 'entitled person',
        savage: 'ruthless',
        afk: 'away from keyboard',
        irl: 'in real life',
        finsta: 'private Instagram account',
        sksksk: 'express excitement or nervousness',
        bop: 'person who has "been around"',
        dms: 'direct messages',
        tea: 'gossip',
        boomer: 'out-of-touch older person',
        finesse: 'get what you want skillfully',
        basic: 'follows mainstream trends',
        hyped: 'very excited',
        woke: 'socially aware',
        snatched: 'looking good',
        twinning: 'alike',
        vibing: 'relaxing',
        boujee: 'luxurious',
        adulting: 'taking on responsibilities',
        gucci: 'good',
        wig: 'amazed',
        squad: 'close friends',
        clapped: 'ugly',
        rizz: 'charisma',
      }
    }
  };

  useEffect(() => {
    translateText();
  }, [inputText, sourceLanguage, targetLanguage]);

  const translateText = () => {
    let translatedText = inputText.trim().toLowerCase();

    const phraseDictionary = {
      "no chill": "no emotional control",
      "main character energy": "confidence and stands out",
      "throwing shade": "subtly disrespecting",
      "throw shade": 'subtly disrespect',
      "vibe check": 'assess vibe or energy',
      "big yikes": 'strong discomfort',
      "hits different": 'emotionally impactful',
      "glow up": 'improve appearance',
      "go off": 'express freely',
      "on god": 'emphasize truth',
      "catch these hands": 'ready to fight',
      "throw hands": 'fight',
      "stan culture": 'extreme fandom behavior',
      "spill the tea": 'share the gossip',
      "cursed image": 'unsettling photo',
      "vsco girl": 'specific trendy aesthetic',
      "living rent free": 'constantly on your mind',
      "rent free": 'occupies mind constantly',
      "thirst trap": 'provocative photo',
      "clap back": 'witty retort',
      "on skibidi": "truthfully",
      "on skib": "truthfully",
    };

    Object.keys(phraseDictionary).forEach((phrase) => {
      const regex = new RegExp(`\\b${phrase}\\b`, 'gi');
      translatedText = translatedText.replace(regex, phraseDictionary[phrase]);
    });

    const words = translatedText.split(' ');

    const wordDictionary = dictionary[sourceLanguage][targetLanguage];

    translatedText = words.map((word) => {
      return wordDictionary[word] || word;
    }).join(' ');

    setOutputText(translatedText.trim());
  };

  useEffect(() => {
    const handleScroll = () => {
      const aboutMeSection = document.querySelector('.about-me-container');
      const rect = aboutMeSection.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
        setAboutMeVisible(true);
      } else if (scrollTop < lastScrollTop - 30) {  
        setAboutMeVisible(false);
      }

      setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop); 
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);

  return (
    <div className="app-container">
      <LandingPage />

      <div className="translator-container">
        <textarea
          id="inputText"
          placeholder="Enter text"
          rows="4"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <div className="language-select">
          <select
            id="sourceLanguage"
            value={sourceLanguage}
            onChange={(e) => setSourceLanguage(e.target.value)}
          >
            <option value="al">Gen Alpha</option>
          </select>
          <button id="swapLanguages">
            →
          </button>
          <select
            id="targetLanguage"
            value={targetLanguage}
            onChange={(e) => setTargetLanguage(e.target.value)}
          >
            <option value="en">English</option>
          </select>
        </div>
        <textarea
          id="outputText"
          placeholder="Translation"
          rows="4"
          value={outputText}
          readOnly
        />
      </div>

      <AboutMe aboutMeVisible={aboutMeVisible} />

      <div className="footer-container">
        <div className="footer-section">
          <div className="footer-item">
            <h3>Work with us</h3>
            <p><a href="https://www.linkedin.com/in/kiet-tran12" target="_blank" rel="noopener noreferrer">Kiet Tran</a></p>
            <p><a href="https://www.linkedin.com/in/janreve" target="_blank" rel="noopener noreferrer">Janreve Salubre</a></p>
            <p><a href="https://www.linkedin.com/in/nayan-krishna" target="_blank" rel="noopener noreferrer">Nayan Krishna</a></p>
            <p><a href="https://www.linkedin.com/in/tenzinchoesang" target="_blank" rel="noopener noreferrer">Tenzin Choesang</a></p>
          </div>
          <div className="footer-item">
            <h3>Feedback</h3>
            <a href="https://docs.google.com/forms/d/1H2UHRw6PGRRtinpM3LXRjEiGqfE_adKeBj8NmpgbjqM/viewform?pli=1&pli=1&edit_requested=true" target="_blank" rel="noopener noreferrer">Fill out our feedback form!</a>
          </div>
          <div className="footer-item">
            <h3>Become a part of us</h3>
            <a href="#">Apply here</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
