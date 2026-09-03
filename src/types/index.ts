// Core content types for the portfolio. All copy is data-driven from src/data/*.

export interface Profile {
  name: string;
  role: string;
  experienceYears: string;
  tagline: string;
  focusAreas: string[];
  summary: string;
}

export type SkillCategoryId =
  | 'languages'
  | 'backend'
  | 'frontend'
  | 'databases'
  | 'communication';

export interface SkillCategory {
  id: SkillCategoryId;
  label: string;
  description: string;
  color: string;
}

export interface Skill {
  id: string;
  name: string;
  category: SkillCategoryId;
  /** Related skill ids, used to draw constellation connections. */
  relatedTo?: string[];
}

export interface Experience {
  id: string;
  company: string;
  fullName?: string;
  role: string;
  startYear: number;
  /** undefined endYear means "Present" */
  endYear?: number;
  domain: 'education' | 'industry';
}

export interface Education {
  id: string;
  qualification: string;
  institution: string;
  year: number;
}

export interface Project {
  id: string;
  name: string;
  url: string;
  domain: string;
  description: string;
  visualConcept: string[];
  technologies: string[];
}

export interface ArchitectureLayer {
  id: string;
  label: string;
  sublabel?: string;
}

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  client?: string;
  technologies: string[];
  architecture: ArchitectureLayer[];
  flagship?: boolean;
  category: 'telephony' | 'sdk' | 'native';
}

export interface ArchitectureNode {
  id: string;
  label: string;
  children?: ArchitectureNode[];
}

export interface ArchitectureConnection {
  from: string;
  to: string;
}

export interface ArchitecturePath {
  id: string;
  label: string;
  layers: ArchitectureLayer[];
}

export interface TechMatrixRow {
  productId: string;
  productName: string;
  tags: Record<string, boolean>;
}
