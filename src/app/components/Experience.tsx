"use client";

import Image from "next/image";

interface ExperienceItem {
  logoSrc: string;
  logoAlt: string;
  period: string;
  title: string;
  description: string;
  techStack: string;
}

const experienceItems: ExperienceItem[] = [
  {
    logoSrc: "/images/visma.png",
    logoAlt: "Visma logo",
    period: "3/2022 - Present",
    title: "Software developer",
    description:
      "I am currently working in the AutoPay product team where I focus primarly on a backend part. AutoPays is a cloud-based solution serving as a mediator between banks and ERPs. Our product offers the automatization of payment flow, approving transactions, paying invoices directly from ERP, check of outgoing transactions, payment cancellations, and so on.",
    techStack:
      "Java EE 8, Spring boot, MySQL, Flyway, Docker, MapStruct, Junit5, Payara, AWS",
  },
  {
    logoSrc: "/images/bsc.png",
    logoAlt: "Finshape logo",
    period: "6/2020 - 3/2022",
    title: "Backend developer",
    description:
      "I worked here on a product component for the management of payments and transactions within the new banking platform.",
    techStack:
      "Java 8, Spring boot, Tomcat, Liquibase, PostgreSql Docker, Yarn, Wiremock",
  },
  {
    logoSrc: "/images/bsc.png",
    logoAlt: "Finshape logo",
    period: "2/2019 - 6/2020",
    title: "Junior Java developer",
    description:
      "I was part of a team that implemented the backend orchestration component of a brand-new platform. As we start on the greenfield, the first month I was researching, and learning new technologies which should be used there. The main purpose of the component was to provide data mappings, sync, async processing of messages, and recovery after failure within the platform.",
    techStack:
      "Java 8, Apache camel, Openhub framework, Spring, Tomcat, Mapstruct, Postgresql, Docker",
  },
  {
    logoSrc: "/images/bsc.png",
    logoAlt: "Finshape logo",
    period: "6/2018 - 2/2019",
    title: "Junior Java developer",
    description:
      "I started working as a junior java developer in a team that had maintained multiple applications for different clients. The aim was mostly to solve reported bugs and discuss them with customers. The team also focused also on the implementation of new features.",
    techStack: "Java 7 and older, JSP, XHTML, SVN",
  },
  {
    logoSrc: "/images/hotovo.jpeg",
    logoAlt: "Hotovo logo",
    period: "9/2019 - 2/2020",
    title: "Android developer",
    description:
      "We were developing two independent applications for waste separation in the city. We created a web app for a waste separation provider to create and manage events of particular separations. The second part of the whole platform was an Android application for citizens where the citizen can see all upcoming separation events. They can set notifications and preferences for separations that they are interested in. I was developing an Android app for citizens. As the project was part of school and industry cooperation at the end of the project there was a competition with 48 teams. We finished 3rd.",
    techStack: "Kotlin, Firebase",
  },
];

export default function Experience() {
  return (
    <div className="w3-row" id="experience">
      <h2>Experience</h2>
      {experienceItems.map((item, index) => (
        <div className="w3-row" id="single-experience" key={index}>
          <div className="w3-col">
            <Image
              className="company-logo"
              src={item.logoSrc}
              alt={item.logoAlt}
              width={128}
              height={128}
            />
            <h6>
              {item.period} <b>{item.title}</b>
            </h6>
            <p id="ex-desc">{item.description}</p>
            <h6>Tech stack: {item.techStack}</h6>
          </div>
        </div>
      ))}
    </div>
  );
}
