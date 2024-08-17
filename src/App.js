<<<<<<< Updated upstream
import React, { useState, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import ToiletModel from './ToiletModel';
import PromptChanger from './PromptChanger';
=======
import React, { useState, useEffect } from 'react';
import LandingPage from './LandingPage';
import AboutMe from './AboutMe';
import ConveyorBelt from './ConveyorBelt';
>>>>>>> Stashed changes

function App() {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [sourceLanguage, setSourceLanguage] = useState('en');
  const [targetLanguage, setTargetLanguage] = useState('al');
<<<<<<< Updated upstream
  const [isPaused, setIsPaused] = useState(false);
  const [translation, setTranslation] = useState('Hover over a word to translate');
  const conveyorRef = useRef(null);

  // Hardcoded translations for conveyor words
  const translations = {
    'skibidi': 'good',
    'rizz': 'charisma',
    'sigma': 'cool'
=======
  const [aboutMeVisible, setAboutMeVisible] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  
  // Example dictionary
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
>>>>>>> Stashed changes
  };

  useEffect(() => {
    translateText();
  }, [inputText, sourceLanguage, targetLanguage]);

  const translateText = () => {
    let translatedText = inputText.trim().toLowerCase();

    // Phrase dictionary for multi-word translations
    const phraseDictionary = {
      "no chill": "no emotional control",
      "main character energy": "confidence and stands out",
      "throwing shade": "subtly disrespecting",
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
<<<<<<< Updated upstream
=======
      "on skibidi": "truthfully",
      "on skib": "truthfully",
>>>>>>> Stashed changes
    };

    // Check and replace phrases within the sentence
    Object.keys(phraseDictionary).forEach((phrase) => {
      const regex = new RegExp(`\\b${phrase}\\b`, 'gi');
      translatedText = translatedText.replace(regex, phraseDictionary[phrase]);
    });

    // Split the text into words after phrase replacement
    const words = translatedText.split(' ');

    // Hardcoded word translations for single-word translations
    const wordTranslations = translations;

    translatedText = words.map((word) => {
      return wordTranslations[word] || word; // Translate each word or leave it unchanged
    }).join(' ');

    setOutputText(translatedText.trim());
  };

  const swapLanguages = () => {
    setSourceLanguage(targetLanguage);
    setTargetLanguage(sourceLanguage);
  };

  const handleMouseOver = (e) => {
    setIsPaused(true);
    const word = e.target.innerText.toLowerCase();
    const translated = translations[word];
    if (translated) {
      setTranslation(translated);
    } else {
      setTranslation('Translation not available');
    }
  };

  const handleMouseOut = () => {
    setIsPaused(false);
    setTranslation('Hover over a word to translate');
  };

  // Filter words with single-word translations
  const wordList = Object.keys(dictionary.en.al).filter(word => {
    const translation = dictionary.en.al[word];
    return translation.split(' ').length === 1; // Include only single-word translations
  });

  const translateSingleWord = (word) => {
    return dictionary[sourceLanguage][targetLanguage][word] || word;
  };

  return (
    <>
      <div className="app-container">
        {/* Skibidi Changer above the toilet */}
        <PromptChanger />

        {/* 3D Model with Lighting */}
        <div className="model-container">
          <Canvas shadows camera={{ position: [0, 2, 5], fov: 50 }}>
            <ambientLight intensity={0.7} />
            <directionalLight
              position={[2, 5, 2]}
              intensity={1}
              castShadow
              shadow-mapSize-width={1024}
              shadow-mapSize-height={1024} />
            <ToiletModel modelPath="/toilet.glb" />
          </Canvas>
        </div>

<<<<<<< Updated upstream
        <div className="translator-container">
          <textarea
            id="inputText"
            placeholder="Enter text"
            rows="4"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)} />
          <div className="language-select">
            <select
              id="sourceLanguage"
              value={sourceLanguage}
              onChange={(e) => setSourceLanguage(e.target.value)}
            >
              <option value="al">Gen Alpha</option>
            </select>
            <button id="swapLanguages" onClick={swapLanguages}>
              ⇄
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
            readOnly />
=======
      {/* Conveyor Belt */}
      <ConveyorBelt words={wordList} translateWord={translateSingleWord} />

      {/* About Me Section */}
      <div className={`about-me-container ${aboutMeVisible ? 'expanded' : ''}`}>
        <h2 className="about-me-header">About Me</h2>
        <div className="about-me-text">
          <p>
          This application is designed as a comprehensive tool designed to bridge the gap in understanding modern slang, also known as “Gen Alpha” slang. It serves to empower individuals to learn contemporary language trends without the fear of miscommunication or embarrassment. Whether you're trying to stay current or simply decode unfamiliar terminology, this application provides a user-friendly solution that fosters learning and inclusivity in an ever-evolving linguistic landscape.
          </p>
>>>>>>> Stashed changes
        </div>
      </div>

      <div className="conveyor-container">
        <div 
          className={`conveyor ${isPaused ? 'paused' : ''}`}
          ref={conveyorRef}
        >
          <span 
            className="word" 
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            skibidi
          </span>
          <span 
            className="word" 
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            rizz
          </span>
          <span 
            className="word" 
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            sigma
          </span>
        </div>
        <div className="translation-box" id="translationBox">
          {translation}
        </div>
      </div>
    </>
  );
}

<<<<<<< Updated upstream
export default App;
=======
export default App;
>>>>>>> Stashed changes
