export type Project = {
  title: string
  summary: string
  tech: string[]
  url: string
  stars?: number
}

// Contenuti reali letti dai repo GitHub (descrizioni + README, 2026-10-23).
export const projects: Project[] = [
  {
    title: 'phantom-keylogger',
    summary:
      'Stealth keystroke and visual intelligence system for authorized red-team engagements and security research, built with operational security as the primary objective.',
    tech: ['Red Team', 'Stealth', 'OpSec'],
    url: 'https://github.com/MattiaAlessi/phantom-keylogger',
    stars: 77,
  },
  {
    title: 'Narrator',
    summary:
      'Free, offline, private neural text-to-speech desktop app: 54 voices in 8 languages, voice cloning, real-time streaming and audiobook builder. No API costs, no data leaving your machine.',
    tech: ['Python', 'PySide6', 'Kokoro-82M', 'TTS'],
    url: 'https://github.com/MattiaAlessi/Narrator',
    stars: 3,
  },
  {
    title: 'miningflow',
    summary:
      'Static site with mining ROI calculators: per-hashrate scenarios, discount explainer and FAQ.',
    tech: ['HTML'],
    url: 'https://github.com/MattiaAlessi/miningflow',
    stars: 2,
  },
  {
    title: 'tictactoe-ai',
    summary:
      'Tic-tac-toe agent that learns through Deep Q-Learning self-play, with multiple game modes and live performance analytics.',
    tech: ['Python', 'PyTorch', 'Deep Q-Learning'],
    url: 'https://github.com/MattiaAlessi/tictactoe-ai',
    stars: 0,
  },
]
