import React from "react"
import { FaGithub, FaTelegramPlane, FaEnvelope } from "react-icons/fa"

export const Footer = () => {
  return (
    <footer className="mt-8 py-4 border-t border-gray-300 flex justify-center">
      <div className="flex space-x-4">
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
    </footer>
  )
}
