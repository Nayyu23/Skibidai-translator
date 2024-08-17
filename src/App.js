import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import ToiletModel from './ToiletModel'; // Import the 3D model component

function App() {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [sourceLanguage, setSourceLanguage] = useState('en');
  const [targetLanguage, setTargetLanguage] = useState('al');

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
        bop: 'person who has \"been around\"',
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
  
    // Phrase dictionary for multi-word translations
    const phraseDictionary = {
      "no chill": "no emtional control",
      "main character energy": "confidence and stands out",
      "throwing shade": "subtly disrespecting",
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

  const swapLanguages = () => {
    setSourceLanguage(targetLanguage);
    setTargetLanguage(sourceLanguage);
  };

  return (
    <div className="app-container">
      {/* 3D Model with Lighting above the Translator UI */}
      <div className="model-container">
        <Canvas shadows camera={{ position: [0, 2, 5], fov: 50 }}>
          <ambientLight intensity={0.3} />
          <directionalLight
            position={[2, 5, 2]}
            intensity={1}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />
          <ToiletModel modelPath="/toilet.glb" />
        </Canvas>
      </div>

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
          readOnly
        />
      </div>
    </div>
  );
}

export default App;
