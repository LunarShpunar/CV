import React from "react"
import { FaGithub, FaTelegramPlane, FaEnvelope } from "react-icons/fa"

export const Header = () => {
  return (
    <header className="bg-teal-50 p-6">
      <div className="flex flex-col-reverse sm:flex-row sm:justify-between sm:items-center gap-5">
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold text-indigo-800 text-center">
            Zakhar Kuklanov
          </h1>
          <h2 className="text-2xl mt-2 text-teal-600 text-center sm:text-left">
            Backend-developer
          </h2>
        </div>
        <div className="flex sm:flex-row space-x-3 sm:space-y-0 sm:space-x-6 justify-center">
          <a
            href="https://github.com/LunarShpunar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-teal-700 hover:opacity-60"
          >
            <FaGithub />
          </a>
          <a
            href="https://t.me/lunariol"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-teal-700 hover:opacity-60"
          >
            <FaTelegramPlane />
          </a>
          <a
            href="mailto:kuklanov03@gmail.com"
            className="text-2xl text-teal-700 hover:opacity-60"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </header>
  )
}
