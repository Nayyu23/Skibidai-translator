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
        bussin: 'very good, often food',
        cap: 'a lie',
        drip: 'impressive style',
        slay: 'perform exceptionally well',
        bet: 'agreement or sure',
        mood: 'relatable feeling',
        simp: 'overly attentive to someone',
        cheugy: 'outdated or trying too hard',
        stan: 'obsessed fan',
        sus: 'suspicious or shady',
        fire: 'very cool or amazing',
        flex: 'show off',
        ghosting: 'cutting off communication',
        lit: 'exciting or cool',
        w: 'win or success',
        l: 'loss or failure',
        ratio: 'negative response outshines',
        yeet: 'throw or express excitement',
        fam: 'family or close friends',
        goat: 'greatest of all time',
        bruh: 'expression of disbelief',
        salty: 'bitter or upset',
        lowkey: 'done quietly or subtly',
        highkey: 'obviously or notably',
        snack: 'attractive person',
        cancel: 'stop supporting someone',
        clout: 'influence, especially online',
        drag: 'harsh criticism',
        noob: 'inexperienced person',
        troll: 'provokes online for fun',
        shook: 'shocked or surprised',
        thirsty: 'desperate for attention',
        receipts: 'proof or evidence',
        karen: 'entitled or demanding person',
        savage: 'bold or ruthless',
        afk: 'away from keyboard',
        irl: 'in real life',
        finsta: 'private Instagram account',
        sksksk: 'express excitement or nervousness',
        bop: 'catchy song',
        dms: 'direct messages',
        tea: 'gossip',
        boomer: 'out-of-touch older person',
        finesse: 'get what you want skillfully',
        basic: 'follows mainstream trends',
        hyped: 'very excited',
        woke: 'socially aware',
        snatched: 'looking good',
        twinning: 'dressed alike',
        vibing: 'relaxing or enjoying',
        boujee: 'luxurious or pretentious',
        adulting: 'taking on responsibilities',
        gucci: 'good or cool',
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
      "no chill": "overreacts",
      "main character energy": "confident and stands out",
      "throwing shade": "subtly disrespect",
      "vibe check": 'assess vibe or energy',
      "big yikes": 'strong discomfort',
      "hits different": 'emotionally impactful',
      "glow up": 'improve appearance or situation',
      "go off:": 'express freely',
      "on god": 'emphasize truth',
      "catch these hands": 'ready to fight',
      "stan culture": 'extreme fandom behavior',
      "spill the tea": 'share gossip',
      "ok boomer": 'dismiss older generation',
      "cursed image": 'unsettling photo',
      "vsco girl": 'specific trendy aesthetic',
      "living rent free": 'constantly on your mind',
      "rent free": 'occupies mind constantly',
      "clout chaser": 'seeks online attention',
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
