import motherboardRepair from "../../assets/motherboard_repair.png";
import urbanCompanyLogo  from "../../assets/urban_company.png";
import doorStepLogo      from "../../assets/door_step.png";
import greenIndiaLogo    from "../../assets/green_india_team.jpeg";

export const heroContent = {
  headline: "Trusted Electronics Repair Service",
  subheadline:
    "25+ Years of Experience in TV, AC, Refrigerator & Microwave Repair",
  features: [
    { id: 1, icon: "⚡", label: "Fast Home Service" },
    { id: 2, icon: "💰", label: "Affordable Pricing" },
    { id: 3, icon: "🛠️", label: "Expert Technician" },
  ],
  buttons: {
    call:      { label: "Call Now",  phone: "tel:+919810485083" },
    whatsapp:  { label: "WhatsApp",  link: "https://wa.me/919810485083" },
  },
  partners: [
    { id: 1, src: doorStepLogo,     alt: "Door Step — Service Partner"     },
    { id: 2, src: urbanCompanyLogo, alt: "Urban Company — Service Partner" },
    { id: 3, src: greenIndiaLogo,   alt: "Green India Team — Service Partner" },
  ],
  image: {
    src: motherboardRepair,
    alt: "Electronics Repair Technician",
  },
};