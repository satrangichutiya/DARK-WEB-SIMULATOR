"use client";

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TerminalInterfaceProps {
  onAccessGranted: () => void;
}

const bootSequence = [
  "INITIALIZING QUANTUM ENCRYPTION...",
  "CONNECTING TO VOID NETWORK...",
  "ESTABLISHING PLATINUM TUNNEL...",
  "BYPASSING NEURAL FIREWALLS...",
  "ACCESSING DEEP VOID PROTOCOLS...",
  "QUANTUM ENTANGLEMENT ESTABLISHED",
  "",
  "VOID PLATINUM MARKET v3.1.4",
  "BIOMETRIC SCAN REQUIRED",
  "NEURAL AUTHENTICATION INITIATED...",
  "ENTER PLATINUM ACCESS CODE:",
];

export function TerminalInterface({ onAccessGranted }: TerminalInterfaceProps) {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [inputError, setInputError] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);

  console.log("Terminal interface initialized");

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    if (currentLineIndex < bootSequence.length) {
      const currentLine = bootSequence[currentLineIndex];
      let charIndex = 0;

      console.log(`Typing line ${currentLineIndex}: ${currentLine}`);

      const typeInterval = setInterval(() => {
        if (charIndex <= currentLine.length) {
          setDisplayedText(currentLine.slice(0, charIndex));
          charIndex++;
        } else {
          clearInterval(typeInterval);
          setTimeout(() => {
            setCurrentLineIndex(prev => prev + 1);
            setDisplayedText("");
          }, currentLine === "" ? 100 : 800);
        }
      }, currentLine === "" ? 50 : Math.random() * 50 + 30);

      return () => clearInterval(typeInterval);
    } else {
      console.log("Boot sequence complete, showing input");
      setShowInput(true);
      setTimeout(() => inputRef.current?.focus(), 500);
    }
  }, [currentLineIndex]);

  const handleInputSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Access code submitted:", userInput);

    if (userInput.toLowerCase() === "access_granted") {
      console.log("Correct access code entered");
      setInputError(false);
      setDisplayedText("ACCESS GRANTED. WELCOME TO THE VOID...");
      setTimeout(() => {
        onAccessGranted();
      }, 2000);
    } else {
      console.log("Incorrect access code");
      setInputError(true);
      setUserInput("");
      setTimeout(() => setInputError(false), 2000);
    }
  };

  const displayedLines = bootSequence.slice(0, currentLineIndex);

  return (
    <div className="min-h-screen bg-void-900 font-terminal text-platinum-light p-8 relative overflow-hidden">
      {/* Animated Platinum Particles Background */}
      <div className="fixed inset-0 opacity-20">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: i % 3 === 0 ? '#ff006e' : i % 3 === 1 ? '#0066ff' : '#ff3030',
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Rotating Neon Rings */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-neon-pink rounded-full animate-rotate-3d opacity-30"></div>
        <div className="absolute top-3/4 right-1/4 w-48 h-48 border-2 border-neon-blue rounded-full animate-rotate-3d opacity-20" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/2 w-24 h-24 border-2 border-neon-red rounded-full animate-rotate-3d opacity-25" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Scan Line Effect */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="w-full h-0.5 bg-gradient-to-r from-neon-pink via-neon-blue to-neon-red opacity-60 animate-scan-line"></div>
      </div>

      {/* Terminal Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Boot Sequence */}
        <motion.div 
          className="space-y-2 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {displayedLines.map((line, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center"
            >
              <span className="text-neon-pink mr-2">{'>'}</span>
              <span className={line.includes("VOID") ? "text-transparent bg-gradient-to-r from-neon-pink via-neon-blue to-neon-red bg-clip-text text-3xl font-bold animate-slide-neon" : ""}>{line}</span>
            </motion.div>
          ))}
          
          {currentLineIndex < bootSequence.length && displayedText && (
            <div className="flex items-center">
              <span className="text-neon-pink mr-2">{'>'}</span>
              <span className={displayedText.includes("VOID") ? "text-transparent bg-gradient-to-r from-neon-pink via-neon-blue to-neon-red bg-clip-text text-3xl font-bold animate-slide-neon" : ""}>
                {displayedText}
                {showCursor && <span className="animate-blink text-neon-blue">_</span>}
              </span>
            </div>
          )}
        </motion.div>

        {/* Input Section */}
        <AnimatePresence>
          {showInput && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8"
            >
              <form onSubmit={handleInputSubmit} className="flex items-center text-lg">
                <span className="text-neon-pink mr-2">{'>'}</span>
                <span className="mr-4">ENTER_CODE:</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  className={`bg-transparent border-none outline-none text-transparent bg-gradient-to-r from-neon-pink to-neon-blue bg-clip-text font-terminal text-lg w-64 placeholder-gray-500 ${
                    inputError ? 'animate-glitch' : ''
                  }`}
                  placeholder="access_granted"
                  autoComplete="off"
                />
                {showCursor && <span className="animate-blink text-neon-red">_</span>}
              </form>

              {inputError && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-4 text-neon-red animate-glitch"
                >
                  <span className="text-neon-pink mr-2">{'>'}</span>
                  ACCESS DENIED. INVALID CREDENTIALS.
                </motion.div>
              )}

              {/* Hint */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3 }}
                className="mt-8 text-sm text-gray-500"
              >
                <span className="text-neon-pink mr-2">{'>'}</span>
                HINT: Try typing "access_granted"
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Educational Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="fixed bottom-4 left-4 text-xs text-gray-600 max-w-md"
        >
          <div className="bg-void-800/50 p-3 rounded border border-gray-700">
            <p className="text-neon-blue mb-1">⚠️ EDUCATIONAL SIMULATION ONLY</p>
            <p>Made by: AAYUSH SIR | Code: AYUSH SOR</p>
            <p>GitHub: @DEVGRAMOP | Instagram: @WOXPC</p>
            <p>Source: @SATHYA_0P</p>
            <p className="text-neon-red mt-1">FOR PORTFOLIO/EDUCATIONAL PURPOSES ONLY</p>
          </div>
        </motion.div>

        {/* Glitch Effect Overlay */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-matrix-green/5 to-transparent animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}