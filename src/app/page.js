import DentalCareSection from "@/components/DentalCareSection";
import Hero from "../components/Hero";
import DentalServices from "@/components/DentalServices";
import DentalFAQ from "@/components/DentalFaq";
import PatientReviews from "@/components/PatientReviews";
import ServicesSlider from "@/components/ServiceSlider";


export default function Home() {
  return (
    <div>
      <Hero />
     <DentalCareSection/>
     <DentalServices/>
     
     <DentalFAQ/>
    <ServicesSlider/>
     <PatientReviews/>
    </div>
  );
}
