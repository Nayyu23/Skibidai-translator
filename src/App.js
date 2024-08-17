import Navbar from './Navbar';
import Home from './Home';
import React, { useState, useEffect } from 'react';



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
        cap: 'a lie',
        no_cap: 'truth',
        drip: 'impressive style',
        slay: 'perform exceptionally well',
        bet: 'agreement or sure',
        mood: 'relatable feeling',
        simp: 'overly attentive to someone',
        vibe_check: 'assess vibe or energy',
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
        low_key: 'done quietly or subtly',
        high_key: 'obviously or notably',
        big_yikes: 'strong discomfort',
        snack: 'attractive person',
        hits_different: 'emotionally impactful',
        glow_up: 'improve appearance or situation',
        main_character_energy: 'confident and stands out',
        cancel: 'stop supporting someone',
        clout: 'influence, especially online',
        drag: 'harsh criticism',
        go_off: 'express freely',
        on_god: 'emphasize truth',
        noob: 'inexperienced person',
        troll: 'provokes online for fun',
        shook: 'shocked or surprised',
        catch_these_hands: 'ready to fight',
        thirsty: 'desperate for attention',
        receipts: 'proof or evidence',
        stan_culture: 'extreme fandom behavior',
        spill_the_tea: 'share gossip',
        karen: 'entitled or demanding person',
        cursed_image: 'unsettling photo',
        vsco_girl: 'specific trendy aesthetic',
        savage: 'bold or ruthless',
        living_rent_free: 'constantly on your mind',
        afk: 'away from keyboard',
        irl: 'in real life',
        finsta: 'private Instagram account',
        sksksk: 'express excitement or nervousness',
        ok_boomer: 'dismiss older generation',
        bop: 'catchy song',
        rent_free: 'occupies mind constantly',
        clout_chaser: 'seeks online attention',
        dms: 'direct messages',
        tea: 'gossip',
        boomer: 'out-of-touch older person',
        finesse: 'get what you want skillfully',
        thirst_trap: 'provocative photo',
        basic: 'follows mainstream trends',
        hyped: 'very excited',
        woke: 'socially aware',
        snatched: 'looking good',
        twinning: 'dressed alike',
        vibing: 'relaxing or enjoying',
        boujee: 'luxurious or pretentious',
        adulting: 'taking on responsibilities',
        clap_back: 'witty retort',
        gucci: 'good or cool',
        throwing_shade: 'subtly disrespect',
        wig: 'amazed',
        no_chill: 'overreacts or not calm',
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
    const words = inputText.trim().toLowerCase().split(' ');
    let translatedText = '';

    words.forEach((word) => {
      if (
        dictionary[sourceLanguage] &&
        dictionary[sourceLanguage][targetLanguage] &&
        dictionary[sourceLanguage][targetLanguage][word]
      ) {
        translatedText += dictionary[sourceLanguage][targetLanguage][word] + ' ';
      } else {
        translatedText += word + ' ';
      }
    });

    setOutputText(translatedText.trim());
  };

  const swapLanguages = () => {
    setSourceLanguage(targetLanguage);
    setTargetLanguage(sourceLanguage);
  };

  return (
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
          <option value="en">English</option>
        </select>
        <button id="swapLanguages" onClick={swapLanguages}>
          ⇄
        </button>
        <select
          id="targetLanguage"
          value={targetLanguage}
          onChange={(e) => setTargetLanguage(e.target.value)}
        >
          <option value="al">Gen Alpha</option>
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
  );
}

export default App;
