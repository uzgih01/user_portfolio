import React from 'react';
import type { Skill, Experience } from './types';

export const PORTFOLIO_DATA = {
  name: "Aditya Kore",
  profession: "Video Editor",
  summary: "I'm a third-year undergrad at IIT Roorkee with over 2 years of hands-on experience in video editing. I genuinely love bringing ideas to life through edits that feel right - clean, impactful, and memorable. Excited to share my work with you - hope you'll enjoy it as much as I enjoyed creating it.",
  ctaLink: "https://drive.google.com/file/d/1pmfw9ncnHHtKZl_mT6OkG6vTjSmIbTH2/view?usp=drivesdk",
  contact: {
    email: "userinphone.2@gmail.com",
    phone: "9113679057",
  },
};

// FIX: Replaced JSX syntax with React.createElement calls to be compatible with a .ts file.
// The file extension is .ts, not .tsx, so it cannot parse JSX directly.
export const SKILLS_DATA: Skill[] = [
  { 
    name: 'Premiere Pro', 
    icon: React.createElement('span', { className: "text-2xl font-bold" }, 'Pr') 
  },
  { 
    name: 'After Effects', 
    icon: React.createElement('span', { className: "text-2xl font-bold" }, 'Ae')
  },
  { 
    name: 'DaVinci Resolve', 
    icon: React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-8 w-8", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, 
        React.createElement('circle', { cx: "12", cy: "12", r: "10" }), 
        React.createElement('circle', { cx: "12", cy: "12", r: "3" })
    )
  },
  { 
    name: 'Storyboarding', 
    icon: React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-8 w-8", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
        React.createElement('rect', { x: "3", y: "3", width: "18", height: "18", rx: "2", ry: "2" }),
        React.createElement('line', { x1: "3", y1: "9", x2: "21", y2: "9" }),
        React.createElement('line', { x1: "9", y1: "21", x2: "9", y2: "9" })
    )
  },
  { 
    name: 'Visual Storytelling', 
    icon: React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-8 w-8", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
        React.createElement('path', { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }),
        React.createElement('polyline', { points: "14 2 14 8 20 8" }),
        React.createElement('line', { x1: "16", y1: "13", x2: "8", y2: "13" }),
        React.createElement('line', { x1: "16", y1: "17", x2: "8", y2: "17" }),
        React.createElement('polyline', { points: "10 9 9 9 8 9" })
    )
  },
];

export const EXPERIENCE_DATA: Experience[] = [
  {
    role: "Video Editor",
    team: "TEDx IITRoorkee",
    year: "2023 - Present",
  },
  {
    role: "Video Team Lead",
    team: "E-SUMMIT 25",
    year: "2024 - Present",
  },
];
