import LandingNavbar from "@/components/Landing/LandingNavbar"
import HeroSection from "@/components/Landing/HeroSection"
import FeatureSection from "@/components/Landing/FeatureSection"
import HowItWorks from "@/components/Landing/HowItWorks"
const Landing = () => {
  return (
    <div>
        <LandingNavbar />
        <HeroSection />
        <FeatureSection />
        <HowItWorks />

    </div>
  )
}

export default Landing