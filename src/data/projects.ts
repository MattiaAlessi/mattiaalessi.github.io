export type Project = {
  title: string
  summary: string
  tech: string[]
  url: string
  stars?: number
}

// Contenuti iniziali dai tuoi repo GitHub (PLAN.md §5).
// TODO M5: affinare le descrizioni una volta letti i README reali.
export const projects: Project[] = [
  {
    title: 'phantom-keylogger',
    summary:
      'Security research project exploring keystroke capture and detection techniques.',
    tech: ['Python'],
    url: 'https://github.com/MattiaAlessi/phantom-keylogger',
    stars: 77,
  },
  {
    title: 'Narrator',
    summary: 'Desktop text-to-speech app that reads any document aloud.',
    tech: ['Python'],
    url: 'https://github.com/MattiaAlessi/Narrator',
  },
  {
    title: 'miningflow',
    summary: 'Workflow tool for automating repetitive data-mining tasks.',
    tech: ['Python'],
    url: 'https://github.com/MattiaAlessi/miningflow',
  },
  {
    title: 'tictactoe-ai',
    summary: 'Unbeatable tic-tac-toe agent built with a PyTorch neural network.',
    tech: ['Python', 'PyTorch'],
    url: 'https://github.com/MattiaAlessi/tictactoe-ai',
  },
]
