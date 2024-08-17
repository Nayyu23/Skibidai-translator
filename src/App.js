import React, { useState, useEffect } from 'react';
import LandingPage from './LandingPage'; // Import the LandingPage component
import AboutMe from './AboutMe'; // Import the AboutMe component

function App() {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [sourceLanguage, setSourceLanguage] = useState('en');
  const [targetLanguage, setTargetLanguage] = useState('al');
<<<<<<< Updated upstream
=======
  const [aboutMeVisible, setAboutMeVisible] = useState(false); // State for About Me visibility
  const [lastScrollTop, setLastScrollTop] = useState(0); // State to track the last scroll position
>>>>>>> Stashed changes

  // Example dictionary
  const dictionary = {  
    en: {
      al: {
        skibidi: 'good',
        ohio: 'bad',
        sigma: 'cool',
        bussin: 'very good, often food',
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
<<<<<<< Updated upstream
        ok_boomer: 'dismiss older generation',
        bop: 'catchy song',
        rent_free: 'occupies mind constantly',
        clout_chaser: 'seeks online attention',
=======
        bop: 'person who has "been around"',
>>>>>>> Stashed changes
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

<<<<<<< Updated upstream
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
=======
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
>>>>>>> Stashed changes
    });

    setOutputText(translatedText.trim());
  };

<<<<<<< Updated upstream
  const swapLanguages = () => {
    setSourceLanguage(targetLanguage);
    setTargetLanguage(sourceLanguage);
  };
=======
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
>>>>>>> Stashed changes

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
          <select
            id="sourceLanguage"
            value={sourceLanguage}
            onChange={(e) => setSourceLanguage(e.target.value)}
          >
            <option value="en">English</option>
          </select>
<<<<<<< Updated upstream
          <button id="swapLanguages" onClick={swapLanguages}>
=======
          <button id="swapLanguages" onClick={() => {
            const temp = sourceLanguage;
            setSourceLanguage(targetLanguage);
            setTargetLanguage(temp);
          }}>
>>>>>>> Stashed changes
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

      {/* About Me Section */}
      <div className={`about-me-container ${aboutMeVisible ? 'expanded' : ''}`}>
        <h2 className="about-me-header">About Me</h2>
        <div className="about-me-text">
          <p>
            This application serves as a comprehensive tool designed to bridge the gap in understanding modern slang and colloquial expressions. By offering seamless translations, it empowers users to confidently navigate and comprehend contemporary language trends without the fear of miscommunication or embarrassment. Whether you're trying to stay current or simply decode unfamiliar terminology, this application provides a user-friendly solution that fosters learning and inclusivity in an ever-evolving linguistic landscape.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
