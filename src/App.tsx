import { Layout } from './components/layout/Layout';
import { Hero } from './components/hero/Hero';
import { AboutSection } from './components/about/AboutSection';
import { SkillsSection } from './components/skills/SkillsSection';
import { ExperienceTimeline } from './components/timeline/ExperienceTimeline';
import { EducationTimeline } from './components/education/EducationTimeline';
import { ProjectsSection } from './components/projects/ProjectsSection';
import { ProductsSection } from './components/products/ProductsSection';
import { ArchitectureSection } from './components/architecture/ArchitectureSection';
import { ContactSection } from './components/contact/ContactSection';

function App() {
  return (
    <Layout>
      <Hero />
      <AboutSection />
      <SkillsSection />
      <ExperienceTimeline />
      <EducationTimeline />
      <ProjectsSection />
      <ProductsSection />
      <ArchitectureSection />
      <ContactSection />
    </Layout>
  );
}

export default App;
