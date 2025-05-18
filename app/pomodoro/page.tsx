"use client";

import { useState, useEffect, useRef } from "react";

export default function Pomodoro() {
  const TOTAL_SECONDS = 1500;
  const [timerLeft, setTimerLeft] = useState<number>(TOTAL_SECONDS);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [startTime, setStartTime] = useState<number | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Fungsi suara
  function soundPomodor() {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance("Pomodoro Time is Over");
    const voices = synth.getVoices();
    if (voices.length > 0) {
      utterance.voice = voices[0];
    }
    synth.speak(utterance);
  }

  // Efek untuk memulai interval ketika timer aktif
  useEffect(() => {
    if (!isRunning || startTime === null) return;

    timerRef.current = setInterval(() => {
      const elapsed = Math.floor((Date.now() - startTime) / 1000);
      const remaining = TOTAL_SECONDS - elapsed;

      if (remaining <= 0) {
        clearInterval(timerRef.current!);
        setIsRunning(false);
        setTimerLeft(0);
        soundPomodor();
      } else {
        setTimerLeft(remaining);
      }
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isRunning, startTime]);

  const handleStart = () => {
    if (!isRunning) {
      setStartTime(Date.now());
      setIsRunning(true);
    }
  };

  const handleStop = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setIsRunning(false);
  };

  const handleRestart = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setIsRunning(false);
    setStartTime(null);
    setTimerLeft(TOTAL_SECONDS);
  };

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, "0")}:${m
      .toString()
      .padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <section className="my-16 grow flex-1 flex flex-col gap-4 items-center justify-center">
      <p className="text-center font-medium dark:text-white text-3xl text-gray-500">
        Pomodoro
      </p>
      <h1 className="text-center text-gray-500 dark:text-white font-bold text-9xl">
        {formatTime(timerLeft)}
      </h1>
      <div className="text-gray-500 dark:text-white flex gap-5">
        <button
          onClick={handleStart}
          className="transition duration-300 ease-in-out hover:bg-white hover:border-primary hover:text-gray py-4 px-10 rounded-lg border text-xl font-semibold"
        >
          Start
        </button>
        <button
          onClick={handleStop}
          className="transition duration-300 ease-in-out hover:bg-white hover:border-primary hover:text-gray py-4 px-10 rounded-lg border text-xl font-semibold"
        >
          Stop
        </button>
        <button
          onClick={handleRestart}
          className="transition duration-300 ease-in-out hover:bg-white hover:border-primary hover:text-gray py-4 px-10 rounded-lg border text-xl font-semibold"
        >
          Restart
        </button>
      </div>
    </section>
  );
}
