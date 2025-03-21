"use client";

import Image from "next/image";
import { useState } from "react";

interface ExperienceItem {
  id: string;
  logoSrc: string;
  logoAlt: string;
  companyName: string;
  period: string;
  title: string;
  description: string;
  techStack: string;
}

const experienceItems: ExperienceItem[] = [
  {
    id: "visma",
    logoSrc: "/images/visma.png",
    logoAlt: "Visma logo",
    companyName: "Visma",
    period: "3/2022 - Present",
    title: "Software developer",
    description:
      "I am currently working in the AutoPay product team where I focus primarly on a backend part. AutoPays is a cloud-based solution serving as a mediator between banks and ERPs. Our product offers the automatization of payment flow, approving transactions, paying invoices directly from ERP, check of outgoing transactions, payment cancellations, and so on.",
    techStack:
      "Java EE 8, Spring boot, MySQL, Flyway, Docker, MapStruct, Junit5, Payara, AWS",
  },
  {
    id: "finshape1",
    logoSrc: "/images/bsc.png",
    logoAlt: "Finshape logo",
    companyName: "Finshape",
    period: "6/2020 - 3/2022",
    title: "Backend developer",
    description:
      "I worked here on a product component for the management of payments and transactions within the new banking platform.",
    techStack:
      "Java 8, Spring boot, Tomcat, Liquibase, PostgreSql Docker, Yarn, Wiremock",
  },
  {
    id: "finshape2",
    logoSrc: "/images/bsc.png",
    logoAlt: "Finshape logo",
    companyName: "Finshape",
    period: "2/2019 - 6/2020",
    title: "Junior Java developer",
    description:
      "I was part of a team that implemented the backend orchestration component of a brand-new platform. As we start on the greenfield, the first month I was researching, and learning new technologies which should be used there. The main purpose of the component was to provide data mappings, sync, async processing of messages, and recovery after failure within the platform.",
    techStack:
      "Java 8, Apache camel, Openhub framework, Spring, Tomcat, Mapstruct, Postgresql, Docker",
  },
  {
    id: "finshape3",
    logoSrc: "/images/bsc.png",
    logoAlt: "Finshape logo",
    companyName: "Finshape",
    period: "6/2018 - 2/2019",
    title: "Junior Java developer",
    description:
      "I started working as a junior java developer in a team that had maintained multiple applications for different clients. The aim was mostly to solve reported bugs and discuss them with customers. The team also focused also on the implementation of new features.",
    techStack: "Java 7 and older, JSP, XHTML, SVN",
  },
  {
    id: "hotovo",
    logoSrc: "/images/hotovo.jpeg",
    logoAlt: "Hotovo logo",
    companyName: "Hotovo",
    period: "9/2019 - 2/2020",
    title: "Android developer",
    description:
      "We were developing two independent applications for waste separation in the city. We created a web app for a waste separation provider to create and manage events of particular separations. The second part of the whole platform was an Android application for citizens where the citizen can see all upcoming separation events. They can set notifications and preferences for separations that they are interested in. I was developing an Android app for citizens. As the project was part of school and industry cooperation at the end of the project there was a competition with 48 teams. We finished 3rd.",
    techStack: "Kotlin, Firebase",
  },
];

export default function Experience() {
  const [selectedExperience, setSelectedExperience] = useState<ExperienceItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (experience: ExperienceItem) => {
    setSelectedExperience(experience);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  // Close modal when clicking outside of it
  const handleModalBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div className="w3-row" id="experience">
      <h2>Experience</h2>
      
      <div className="experience-cards">
        {experienceItems.map((item) => (
          <div 
            className="experience-card" 
            key={item.id}
            onClick={() => openModal(item)}
          >
            <div className="experience-card-logo">
              <Image
                src={item.logoSrc}
                alt={item.logoAlt}
                width={80}
                height={80}
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className="experience-card-content">
              <h3 className="experience-card-title">{item.title}</h3>
              <p className="experience-card-company">{item.companyName}</p>
              <p className="experience-card-period">{item.period}</p>
            </div>
            <div className="experience-card-arrow">
              <span>&#10095;</span>
            </div>
          </div>
        ))}
      </div>
      
      {/* Modal */}
      {isModalOpen && selectedExperience && (
        <div className="modal-backdrop" onClick={handleModalBackdropClick}>
          <div className="modal-content">
            <button className="modal-close" onClick={closeModal}>×</button>
            
            <div className="modal-header">
              <Image
                src={selectedExperience.logoSrc}
                alt={selectedExperience.logoAlt}
                width={100}
                height={100}
                style={{ objectFit: "contain" }}
                className="modal-logo"
              />
              <div>
                <h3 className="modal-title">{selectedExperience.title}</h3>
                <p className="modal-company">{selectedExperience.companyName}</p>
                <p className="modal-period">{selectedExperience.period}</p>
              </div>
            </div>
            
            <div className="modal-body">
              <h4>Description</h4>
              <p>{selectedExperience.description}</p>
              
              <h4>Tech Stack</h4>
              <div className="tech-stack">
                {selectedExperience.techStack.split(/,\s*/).map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
