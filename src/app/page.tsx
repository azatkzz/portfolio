import { HeroIntro } from "@/components/HeroIntro";
import { ModelStats } from "@/components/ModelStats";
import { ProjectStack } from "@/components/ProjectStack";
import { CreativeShowcase } from "@/components/CreativeShowcase";

export default function Home() {
  return (
    <main className="bg-[#FDFCF8]">
       <HeroIntro />
       <ModelStats />
       <ProjectStack />
       <CreativeShowcase />
       <div className="h-[20vh]" /> {/* Footer Spacer */}
    </main>
  )
}
