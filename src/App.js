import React, { useState, useEffect} from 'react';
import LandingPage from './LandingPage';
import ConveyorBelt from './ConveyorBelt';

function App() {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [sourceLanguage] = useState('en');
  const [targetLanguage] = useState('al');
  const [aboutMeVisible, setAboutMeVisible] = useState(false); // State for About Me visibility
  const [lastScrollTop, setLastScrollTop] = useState(0); // State to track the last scroll position


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
  }, [inputText]);

  const translateText = () => {
    let translatedText = inputText.trim().toLowerCase();

    // Phrase dictionary for multi-word translations
    const phraseDictionary = {
      "no chill": "no emtional control",
      "main character energy": "confidence and stands out",
      "throwing shade": "subtly disrespecting",
      "throw shade": 'subtly disrespect',
      "vibe check": 'assess vibe or energy',
      "big yikes": 'strong discomfort',
      "hits different": 'emotionally impactful',
      "glow up": 'improve appearance',
      "go off:": 'express freely',
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

    // Check and replace phrases within the sentence
    Object.keys(phraseDictionary).forEach((phrase) => {
      const regex = new RegExp(`\\b${phrase}\\b`, 'gi');
      translatedText = translatedText.replace(regex, phraseDictionary[phrase]);
    });

    // Split the text into words after phrase replacement
    const words = translatedText.split(' ');

    // Word dictionary for single-word translations
    const wordDictionary = dictionary[sourceLanguage][targetLanguage];

    translatedText = words.map((word) => {
      return wordDictionary[word] || word; // Translate each word or leave it unchanged
    }).join(' ');

    setOutputText(translatedText.trim());
  };

  // Scroll-based visibility for About Me
  useEffect(() => {
    const handleScroll = () => {
      const aboutMeSection = document.querySelector('.about-me-container');
      const rect = aboutMeSection.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      // Increase sensitivity to scrolling up
      if (rect.top <= window.innerHeight && rect.bottom >= 0 && scrollTop > lastScrollTop) {
        setAboutMeVisible(true);
      } else if (scrollTop < lastScrollTop - 5) {  // Smaller threshold for minimizing
        setAboutMeVisible(false);
      }

      setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop); // For Mobile or negative scrolling
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);

  /// scrolling thing

  // Filter words with single-word translations
  const wordList = Object.keys(dictionary.en.al).filter(word => {
    const translation = dictionary.en.al[word];
    return translation.split(' ').length === 1; // Include only single-word translations
  });
  const translateSingleWord = (word) => {
    return dictionary[sourceLanguage][targetLanguage][word] || word;
  };

  return (
    <div className="app-container">
      {/* Landing Page */}
      <LandingPage />

      {/* Translator Section */}
      <div className="translator-container">
        <textarea
          id="inputText"
          placeholder="Enter text"
          rows="4"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <div className="language-select">
          <button id="sourceLanguage">
            Gen Alpha → English
          </button>
        </div>
        <textarea
          id="outputText"
          placeholder="Translation"
          rows="4"
          value={outputText}
          readOnly
        />
      </div>

      {/* Conveyor Belt */}
      <ConveyorBelt words={wordList} translateWord={translateSingleWord} />

      {/* About Me Section */}
      <div className={`about-me-container ${aboutMeVisible ? 'expanded' : ''}`}>
        <h2 className="about-me-header">About Me</h2>
        <div className="about-me-text">
          <p>
          This application is designed as a comprehensive tool designed to bridge the gap in understanding modern slang, also known as “Gen Alpha” slang. It serves to empower individuals to learn contemporary language trends without the fear of miscommunication or embarrassment. Whether you're trying to stay current or simply decode unfamiliar terminology, this application provides a user-friendly solution that fosters learning and inclusivity in an ever-evolving linguistic landscape.
          </p>
        </div>
      </div>
    </div>

  );
}
export default App;