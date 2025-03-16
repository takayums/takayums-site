"use client"

import { convertMiliseconds } from "@/utils/utils"
import { useRef, useState } from "react"

export default function Pomodoro() {
  const [timerLeft, setTimerLeft] = useState<number>(1500)
  let timerRef = useRef<NodeJS.Timeout | null>(null)

  function soundPomodor() {
    const synth = window.speechSynthesis;
    const text = "Pomodoro Time is Over";
    const utterance = new SpeechSynthesisUtterance(text);

    const voices = synth.getVoices();
    utterance.voice = voices[0];

    synth.speak(utterance);
  }

  function handleStart() {
    timerRef.current = setInterval(() => {
      setTimerLeft(prev => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          return 0;
        }
        return prev - 1
      })
    }, 1000)
  }

  function handleStop() {
    clearInterval(timerRef.current)
  }

  function handleRestart() {
    setTimerLeft(1500)
    clearInterval(timerRef.current)
  }

  return (
    <section className="my-16 grow flex-1 flex flex-col gap-4 items-center justify-center">
      <p className="text-center font-medium text-white text-3xl">Pomodoro</p>
      <h1 className="text-center text-white font-bold text-9xl">
        {convertMiliseconds(timerLeft).m}:{convertMiliseconds(timerLeft).s}
      </h1>
      <div className="text-white flex gap-5">
        <button onClick={handleStart} className="py-4 px-10 rounded-lg border text-xl font-semibold">Start</button>
        <button onClick={handleStop} className="py-4 px-10 rounded-lg border text-xl font-semibold">Stop</button>
        <button onClick={handleRestart} className="py-4 px-10 rounded-lg border text-xl font-semibold">Restart</button>
      </div>
    </section>
  )
}

