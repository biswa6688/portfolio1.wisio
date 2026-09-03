import type { Skill, SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    label: 'Languages',
    description: 'Core programming languages spanning systems to application code.',
    color: 'var(--color-skill-languages)',
  },
  {
    id: 'backend',
    label: 'Backend',
    description: 'Server-side platforms and runtimes.',
    color: 'var(--color-skill-backend)',
  },
  {
    id: 'frontend',
    label: 'Frontend',
    description: 'Client application frameworks and languages.',
    color: 'var(--color-skill-frontend)',
  },
  {
    id: 'databases',
    label: 'Databases',
    description: 'Relational and document data stores.',
    color: 'var(--color-skill-databases)',
  },
  {
    id: 'communication',
    label: 'Communication / Real-Time',
    description: 'Telephony integration and real-time communication stacks.',
    color: 'var(--color-skill-communication)',
  },
];

export const skills: Skill[] = [
  // Languages
  { id: 'c', name: 'C', category: 'languages', relatedTo: ['pjsip', 'radix-native'] },
  { id: 'cpp', name: 'C++', category: 'languages', relatedTo: ['pjsip'] },
  { id: 'csharp', name: 'C#', category: 'languages', relatedTo: ['dotnet', 'pjsip'] },
  { id: 'javascript', name: 'JavaScript', category: 'languages', relatedTo: ['react', 'angular', 'nodejs'] },
  { id: 'typescript', name: 'TypeScript', category: 'languages', relatedTo: ['react', 'angular', 'nodejs'] },

  // Backend
  { id: 'dotnet', name: '.NET', category: 'backend', relatedTo: ['csharp', 'mssql'] },
  { id: 'nodejs', name: 'Node.js', category: 'backend', relatedTo: ['javascript', 'typescript', 'mongodb'] },

  // Frontend
  { id: 'react', name: 'React', category: 'frontend', relatedTo: ['javascript', 'typescript'] },
  { id: 'angular', name: 'Angular', category: 'frontend', relatedTo: ['javascript', 'typescript'] },

  // Databases
  { id: 'mongodb', name: 'MongoDB', category: 'databases', relatedTo: ['nodejs'] },
  { id: 'sqlite', name: 'SQLite', category: 'databases', relatedTo: [] },
  { id: 'mssql', name: 'MS SQL Server', category: 'databases', relatedTo: ['dotnet'] },
  { id: 'mysql', name: 'MySQL', category: 'databases', relatedTo: [] },
  { id: 'postgresql', name: 'PostgreSQL', category: 'databases', relatedTo: [] },

  // Communication / Real-Time
  { id: 'tapi', name: 'TAPI', category: 'communication', relatedTo: ['avaya-ipoffice'] },
  { id: 'avaya-ipoffice', name: 'Avaya IP Office', category: 'communication', relatedTo: ['tapi'] },
  { id: 'avaya-pom', name: 'Avaya POM', category: 'communication', relatedTo: [] },
  { id: 'pjsip', name: 'PJSIP', category: 'communication', relatedTo: ['c', 'cpp', 'csharp'] },
  { id: 'webrtc', name: 'WebRTC', category: 'communication', relatedTo: ['javascript'] },
];
