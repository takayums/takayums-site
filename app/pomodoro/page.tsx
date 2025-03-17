"use client";

import { convertMiliseconds } from "@/utils/utils";
import { useCallback, useRef, useState } from "react";

export default function Pomodoro() {
  const [timerLeft, setTimerLeft] = useState<number>(1500);
  let timerRef = useRef<NodeJS.Timeout | null>(null);

  function soundPomodor() {
    const synth = window.speechSynthesis;
    const text = "Pomodoro Time is Over";
    const utterance = new SpeechSynthesisUtterance(text);

    const voices = synth.getVoices();
    utterance.voice = voices[0];

    synth.speak(utterance);
  }

  const handleStart = useCallback(() => {
    if (timerRef.current !== null) return;

    timerRef.current = setInterval(() => {
      setTimerLeft((prev: number): number => {
        if (prev <= 1) {
          clearInterval(timerRef.current as NodeJS.Timeout);
          soundPomodor();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  }, []);

  const handleStop = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current as NodeJS.Timeout);
      timerRef.current = null;
    }
  }, []);

  const handleRestart = useCallback(() => {
    setTimerLeft(1500);
    if (timerRef.current) {
      clearInterval(timerRef.current as NodeJS.Timeout);
      timerRef.current = null;
    }
  }, []);

  const data = convertMiliseconds(timerLeft);
  const dataType = data as { d: number; h: number; m: number; s: number };

  return (
    <section className="my-16 grow flex-1 flex flex-col gap-4 items-center justify-center">
      <p className="text-center font-medium text-white text-3xl">Pomodoro</p>
      <h1 className="text-center text-white font-bold text-9xl">
        {`${dataType.h < 10 ? `0${dataType.h}` : dataType.h}:${dataType.m < 10 ? `0${dataType.m}` : dataType.m}:${dataType.s < 10 ? `0${dataType.s}` : dataType.s}`}
      </h1>
      <div className="text-white flex gap-5">
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
