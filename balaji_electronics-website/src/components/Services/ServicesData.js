import screen_broken from "../../assets/screen_broken.jpg";
import tv_back_repair from "../../assets/tv_back_repair.jpg";
import microwave_repair from "../../assets/microwave_repair.jpg";
import plasma_tv_repair from "../../assets/plasma_tv_repair.jpg";
import motherboard from "../../assets/motherboard.jpg";
import speaker_sony from "../../assets/speaker_sony.jpg";
import air_conditioner from "../../assets/air_conditioner.jpg";
import OLED_repair from "../../assets/OLED_repair.jpg";
import LCD_repair from "../../assets/LCD_repair.jpg";


export const sectionContent = {
  heading: "Our Services",
  subheading:
    "Professional repair solutions for all major electronic appliances and devices",
};

export const services = [
  {
    id: 1,
    category: "Television",
    title: "LED TV Repair",
    description:
      "Expert diagnosis and repair of all LED TV brands including Sony, Samsung, LG and more. Fast turnaround guaranteed.",
    image: tv_back_repair,
  },
  {
    id: 2,
    category: "Television",
    title: "OLED TV Repair",
    description:
      "Specialised repair for premium OLED panels. Screen burn-in treatment, panel replacement and backlight repair.",
    image:OLED_repair,
  },
  {
    id: 3,
    category: "Television",
    title: "LCD TV Repair",
    description:
      "Complete LCD television repair services — inverter board, backlight, display panel and power supply fixes.",
    image: LCD_repair ,
  },
  {
    id: 4,
    category: "Television",
    title: "Plasma TV Repair",
    description:
      "Plasma display repair including sustain board, scan board replacements and plasma cell restoration.",
    image: plasma_tv_repair,
  },
  {
    id: 5,
    category: "Display",
    title: "Screen Replacement",
    description:
      "Cracked or damaged screen? We replace displays for TVs, monitors and appliance panels with genuine parts.",
    image: screen_broken,
  },
  {
    id: 6,
    category: "Circuit",
    title: "Motherboard Repair",
    description:
      "Component-level motherboard repair for televisions and home appliances. IC replacement and PCB restoration.",
    image: motherboard,
  },
  {
    id: 7,
    category: "Appliance",
    title: "Microwave Repair",
    description:
      "Magnetron replacement, door latch, turntable motor and PCB repair for all microwave oven brands.",
    image: microwave_repair,
  },
  {
    id: 8,
    category: "Appliance",
    title: "AC Repair",
    description:
      "Air conditioner servicing, gas refilling, compressor repair and PCB replacement for split and window ACs.",
    image: air_conditioner,
  },
  {
    id: 9,
    category: "Audio",
    title: "Music System Repair",
    description:
      "Home theatre, amplifier and speaker system repair. Audio board, woofer and Bluetooth module replacement.",
    image: speaker_sony,
  },
];