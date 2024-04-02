import { FaComputer } from "react-icons/fa6";
import { GiHumanPyramid, GiArchiveResearch  } from "react-icons/gi";
import { MdOutlineAccountBalance, MdPermDeviceInformation, MdOutlineHighQuality   } from "react-icons/md";
import { SiSalesforce, SiGooglemarketingplatform  } from "react-icons/si";
import { RiCustomerService2Line } from "react-icons/ri";
import { GoProjectRoadmap } from "react-icons/go";

import { HR, QualityAssurance, ResearchDevelopment, Sales, accounting, marketing, projectManagement, softwareEngineer } from "../../../assets/images/departments";

export const DepartLink =[
    {
        id: "1",
        name: "Software Engineer",
        total_Emp: "0",
        Present_Emp: "0",
        img: softwareEngineer,
        icon: <FaComputer size={20}/>
    },
    {
        id: "2",
        name: "Human Resources (HR)",
        total_Emp: "0",
        Present_Emp: "0",
        img: HR,
        icon: <GiHumanPyramid size={20}/>
    },
    {
        id: "3",
        name: "Accounting & Finance",
        total_Emp: "0",
        Present_Emp: "0",
        img: accounting,
        icon: <MdOutlineAccountBalance size={20}/>
    },
    {
        id: "4",
        name: "Information Technology (IT)",
        total_Emp: "0",
        Present_Emp: "0",
        img: softwareEngineer,
        icon: <MdPermDeviceInformation size={20}/>
    },
    {
        id: "5",
        name: "Sales",
        total_Emp: "0",
        Present_Emp: "0",
        img: Sales,
        icon: <SiSalesforce size={20}/>
    },
    {
        id: "6",
        name: "Marketing",
        total_Emp: "0",
        Present_Emp: "0",
        img: marketing,
        icon: <SiGooglemarketingplatform size={20}/>
    },
    {
        id: "7",
        name: "Customer Service",
        total_Emp: "0",
        Present_Emp: "0",
        img: accounting,
        icon: <RiCustomerService2Line size={20}/>
    },
    {
        id: "8",
        name: "R & D",
        total_Emp: "0",
        Present_Emp: "0",
        img: ResearchDevelopment,
        icon: <GiArchiveResearch size={20}/>
    },
    {
        id: "9",
        name: "Project Management",
        total_Emp: "0",
        Present_Emp: "0",
        img: projectManagement,
        icon: <GoProjectRoadmap size={20}/>
    },
    {
        id: "10",
        name: "Quality Assurance (QA)",
        total_Emp: "0",
        Present_Emp: "0",
        img: QualityAssurance,
        icon: <MdOutlineHighQuality size={20}/>
    },
]