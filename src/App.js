import React, { useState, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import ToiletModel from './ToiletModel';
import PromptChanger from './PromptChanger';

function App() {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [sourceLanguage, setSourceLanguage] = useState('en');
  const [targetLanguage, setTargetLanguage] = useState('al');
  const [isPaused, setIsPaused] = useState(false);
  const [translation, setTranslation] = useState('Hover over a word to translate');
  const conveyorRef = useRef(null);

  // Hardcoded translations for conveyor words
  const translations = {
    'skibidi': 'good',
    'rizz': 'charisma',
    'sigma': 'cool'
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

export default App;