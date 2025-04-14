import React, { useState, useEffect, useCallback } from "react";
import words from "./5-letter-words.tsx";

const MAX_GUESSES = 6;
const WORD_LENGTH = 5;
const DICTIONARY = words.map((w) => w.toLowerCase());

const getRandomWord = (): string =>
  words[Math.floor(Math.random() * words.length)].toUpperCase();

type LetterStatus = "correct" | "present" | "absent" | "default";

type Guess = {
  word: string;
  status: LetterStatus[];
};

const QWERTY_KEYS = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Z", "X", "C", "V", "B", "N", "M"],
];

const Wordle: React.FC = () => {
  const [solution, setSolution] = useState<string>(getRandomWord);
  const [guesses, setGuesses] = useState<Guess[]>(
    Array.from({ length: MAX_GUESSES }, () => ({
      word: "",
      status: Array(WORD_LENGTH).fill("default"),
    }))
  );
  const [currentGuess, setCurrentGuess] = useState<string>("");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [letterStatuses, setLetterStatuses] = useState<Record<string, LetterStatus>>({});
  const [success, setSuccess] = useState<boolean>(false);

  const currentRowIndex =
    guesses.findIndex((g) => g.word === "") === -1
      ? MAX_GUESSES - 1
      : guesses.findIndex((g) => g.word === "");

  useEffect(() => {
    const found = guesses.some((g) => g.word === solution);
    const allUsed = guesses.every((g) => g.word !== "");
    if (found || allUsed) {
      setGameOver(true);
      setSuccess(found);
    }
  }, [guesses, solution]);

  const isValidWord = (word: string): boolean =>
    DICTIONARY.includes(word.toLowerCase());

  const checkGuess = (guess: string): LetterStatus[] => {
    const guessLetters = guess.split("");
    const solutionLetters = solution.split("");
    const status: LetterStatus[] = Array(WORD_LENGTH).fill("absent");

    // First pass: mark correct letters.
    guessLetters.forEach((letter, i) => {
      if (letter === solutionLetters[i]) {
        status[i] = "correct";
        solutionLetters[i] = ""; // remove letter to prevent duplicate matching
      }
    });

    // Second pass: mark present letters.
    guessLetters.forEach((letter, i) => {
      if (status[i] !== "correct" && solutionLetters.includes(letter)) {
        status[i] = "present";
        const index = solutionLetters.indexOf(letter);
        solutionLetters[index] = "";
      }
    });
    return status;
  };

  const updateLetterStatuses = (guess: string, statusArray: LetterStatus[]) => {
    const updated = { ...letterStatuses };
    guess.split("").forEach((letter, i) => {
      const newStatus = statusArray[i];
      const oldStatus = updated[letter];
      // Do not downgrade a letter that is already correct
      if (oldStatus === "correct" || (oldStatus === "present" && newStatus === "absent"))
        return;
      updated[letter] = newStatus;
    });
    setLetterStatuses(updated);
  };

  const handleEnter = () => {
    if (currentGuess.length !== WORD_LENGTH) {
      setErrorMsg(`A palavra deve ter ${WORD_LENGTH} letras.`);
      return;
    }
    if (!isValidWord(currentGuess)) {
      setErrorMsg("Palavra não encontrada no dicionário.");
      return;
    }
    const newStatus = checkGuess(currentGuess);
    updateLetterStatuses(currentGuess, newStatus);
    const updatedGuesses = [...guesses];
    updatedGuesses[currentRowIndex] = {
      word: currentGuess,
      status: newStatus,
    };
    setGuesses(updatedGuesses);
    setCurrentGuess("");
    setErrorMsg("");
  };

  const handleKey = useCallback(
    (key: string) => {
      if (gameOver) return;
      if (key === "BACKSPACE") {
        setCurrentGuess((prev) => prev.slice(0, -1));
      } else if (key === "ENTER") {
        if (currentGuess.length !== WORD_LENGTH) {
          setErrorMsg(`A palavra deve ter ${WORD_LENGTH} letras.`);
          return;
        }
        handleEnter();
      } else if (/^[A-Z]$/.test(key)) {
        if (currentGuess.length < WORD_LENGTH) {
          setCurrentGuess((prev) => prev + key);
        }
      }
    },
    [currentGuess, gameOver]
  );

  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      // Convert key to uppercase for consistency.
      handleKey(e.key.toUpperCase());
    };
    window.addEventListener("keydown", listener);
    return () => window.removeEventListener("keydown", listener);
  }, [handleKey]);

  const handleKeyClick = (key: string) => {
    handleKey(key);
  };

  const getKeyColor = (key: string): string => {
    const status = letterStatuses[key] || "default";
    const colors: Record<LetterStatus, string> = {
      correct: "bg-green-600 text-white",
      present: "bg-yellow-500 text-white",
      absent: "bg-gray-700 text-white",
      default: "bg-gray-300 text-black",
    };
    return colors[status];
  };

  const renderKey = (letter: string) => {
    return (
      <button
        key={letter}
        className={`w-8 h-12 sm:w-10 sm:h-14 m-0.5 rounded font-bold ${getKeyColor(letter)}`}
        onClick={() => handleKeyClick(letter)}
      >
        {letter}
      </button>
    );
  };

  return (
    <div className="min-h-screen bg-neutral-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-4">Wordle Clone</h1>

      <div className="grid gap-2 mb-4">
        {guesses.map((guess, rowIdx) => (
          <div key={rowIdx} className="flex gap-2">
            {Array.from({ length: WORD_LENGTH }).map((_, colIdx) => {
              const letter =
                rowIdx === currentRowIndex
                  ? currentGuess[colIdx] || ""
                  : guess.word[colIdx] || "";
              const status =
                rowIdx === currentRowIndex ? "default" : guess.status[colIdx];
              const colors: Record<LetterStatus, string> = {
                correct: "bg-green-500 text-white",
                present: "bg-yellow-400 text-white",
                absent: "bg-gray-500 text-white",
                default: "bg-white text-black border",
              };
              return (
                <div
                  key={colIdx}
                  className={`w-12 h-12 border-2 flex items-center justify-center text-xl font-bold rounded ${colors[status]}`}
                >
                  {letter}
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {errorMsg && <div className="text-red-600 mt-2">{errorMsg}</div>}
      {gameOver && (
        <div className="mt-4 text-xl font-semibold">
          {guesses.some((g) => g.word === solution)
            ? "Parabéns! Você acertou!"
            : `Fim de jogo. A palavra era: ${solution}`}
        </div>
      )}

      <div className="mt-6 select-none">
        {QWERTY_KEYS.map((row, i) => (
          <div key={i} className="flex justify-center mb-1 gap-1">
            {row.map(renderKey)}
            {i === 2 && (
              <>
                <button
                  className="w-16 h-12 bg-blue-500 text-white rounded font-bold"
                  onClick={() => handleKeyClick("ENTER")}
                >
                  Enter
                </button>
                <button
                  className="w-16 h-12 bg-red-500 text-white rounded font-bold"
                  onClick={() => handleKeyClick("BACKSPACE")}
                >
                  Delete
                </button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wordle;
