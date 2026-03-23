import Hero from '../components/Hero';
import TrustedBy from '../components/TrustedBy';
import Services from '../components/Services';
import FeaturedProjects from '../components/FeaturedProjects';
import Stats from '../components/Stats';
import ProcessSteps from '../components/ProcessSteps';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <Services />
      <FeaturedProjects />
      <Stats />
      <ProcessSteps />
      <Testimonials />
      <CTA />
    </>
  );
}
