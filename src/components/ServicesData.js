import icon01 from "../images/images/services-icon01_10.png";
import icon02 from "../images/images/services-icon02_12.png";
import icon03 from "../images/images/services-icon03_09.png";
import { RiAddCircleFill } from "react-icons/ri";
const ServicesData = [
    {
        
        icon: icon01,
        title: 'Website Design',
        caption: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a
        type specimen book. It has survived not only five centuries,
        but also the leap into electronic typesetting, remaining essentially unchanged.`
    },
    {
        icon: icon02,
        title: 'Website Development',
        caption: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a
        type specimen book. It has survived not only five centuries,
        but also the leap into electronic typesetting, remaining essentially unchanged.`
    },
    {
        icon: icon03,
        title: 'Marketing/permotion',
        caption: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a
        type specimen book. It has survived not only five centuries,
        but also the leap into electronic typesetting, remaining essentially unchanged.`
    }
]
const List = [
    {
        listItem:"GRAPHIC DESIGN",
        icon: <RiAddCircleFill/>
    },
    {
        listItem:"ECOMMERCE DEVELOPMENT"
    },
    {
        listItem:"DIGITAL MARKETING"
    },
    {
        listItem:"BRANDING & LOGO"
    },
    {
        listItem:"PHP DEVELOPMENT"
    },
    {
        listItem:"WHITE LEVEL SEO SERVICES"
    },
    {
        listItem:"WEBSITE DESIGN"
    },
    {
        listItem:"WORDPRESS DEVELOPMENT"
    },
    {
        listItem:"PPC ADVERTISING"
    },
    {
        listItem:"UX /UI DESIGN"
    },
    {
        listItem:"MAINTENANCE & UPDATES"
    },
    {
        listItem:"SOCIAL MEDIA MARKETING"
    }
]
export default ServicesData;
export  {List};
