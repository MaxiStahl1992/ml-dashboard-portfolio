import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import AboutMeCard from '@/components/ui/dashboard/about-me-card';
import ContactCard from '@/components/ui/dashboard/contact-card';
import ProjectsCard from '@/components/ui/dashboard/projects-card';
import SkillsCard from '@/components/ui/dashboard/skills-card';
import WelcomeCard from '@/components/ui/dashboard/welcome-card';

export default function Page() {
  return (
    <main className="h-full grid grid-cols-12 grid-rows-12 gap-4 overflow-y-auto">
      <div className="col-span-12 row-span-3 md:col-start-1 md:col-end-6 md:row-start-1 md:row-end-7">
        <WelcomeCard />
      </div>

      <div className="col-span-12 row-span-3 md:col-start-6 md:col-end-13 md:row-start-1 md:row-end-7">
        <AboutMeCard />
      </div>

      <div className="col-span-12 row-span-3 md:col-start-1 md:col-end-8 md:row-start-7 md:row-end-13">
        <ProjectsCard />
      </div>

      <div className="col-span-12 row-span-2 md:col-start-8 md:col-end-13 md:row-start-7 md:row-end-11">
        <SkillsCard />
      </div>

      <div className="col-span-12 row-span-1 md:col-start-8 md:col-end-13 md:row-start-11 md:row-end-13">
        <ContactCard />
      </div>
    </main>
  );
}
