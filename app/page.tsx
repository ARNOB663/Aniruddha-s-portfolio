// app/page.tsx
import Hero from './components/Hero';
import AboutSection from './components/sections/AboutSection';
import ContactSection from './components/sections/ContactSection';

import ProjectsSection from './components/sections/ProjectsSection';
import SkillsSection from './components/sections/SkillsSection';

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      {/* <GridSection /> */}
      <div id="about">
        <AboutSection />
      </div>
      <div id="skills">
        <SkillsSection />
      </div>
      <div id="projects">
        <ProjectsSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
    </main>
  );
}