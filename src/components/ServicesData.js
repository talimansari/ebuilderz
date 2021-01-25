import icon01 from "../images/images/services-icon01_10.png";
import icon02 from "../images/images/services-icon02_12.png";
import icon03 from "../images/images/services-icon03_09.png";
import { IoAdd } from "react-icons/io5";
import douts from "../images/images/services-douts_21.png";

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
        icon: <IoAdd/>,
        douts
    },
    {
        listItem:"ECOMMERCE DEVELOPMENT",
        icon: <IoAdd/>,
        douts
    },
    {
        listItem:"DIGITAL MARKETING",
        icon: <IoAdd/>,
        douts
    },
    {
        listItem:"BRANDING & LOGO",
        icon: <IoAdd/>,
        douts
    },
    {
        listItem:"PHP DEVELOPMENT",
        icon: <IoAdd/>,
        douts
        
    },
    {
        listItem:"WHITE LEVEL SEO SERVICES",
        icon: <IoAdd/>,
        douts
    },
    {
        listItem:"WEBSITE DESIGN",
        icon: <IoAdd/>,
        douts
    },
    {
        listItem:"WORDPRESS DEVELOPMENT",
        icon: <IoAdd/>,
        douts
    },
    {
        listItem:"PPC ADVERTISING",
        icon: <IoAdd/>,
        douts
    },
    {
        listItem:"UX /UI DESIGN",
        icon: <IoAdd/>,
        douts
    },
    {
        listItem:"MAINTENANCE & UPDATES",
        icon: <IoAdd/>,
        douts
    },
    {
        listItem:"SOCIAL MEDIA MARKETING",
        icon: <IoAdd/>,
        douts
    }
]
const Facts = [
{
    counting:"200+",
    countCaption:"Launched projects" 
},
{
    counting:"250+",
    countCaption:"reviews and ratings" 
},
{
    counting:"25000+",
    countCaption:"code line this year" 
},
{
    counting:"9900+",
    countCaption:"coffe cups this year" 
}
]
export default ServicesData;
export  {List,Facts};
