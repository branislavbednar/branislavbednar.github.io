'use client';

import Image from 'next/image';

export default function AboutMe() {
  return (
    <div className="w3-row" id="about-me">
      <div className="w3-col s12 m10 l10" id="about-me-desc">
        <h2>About me</h2>
        <p>Hello. My name is Branislav Bednar. I am a Software developer with 4+ years of experience in the fintech field. My primary programming focus is Backend where I was working with Java SE 8 mostly. Lately, I have been working with Java Enterprise Edition. In 2021 I graduated from the Technical University of Košice with a Master degree in Informatics.</p>
      </div>
      <div className="w3-col s12 m2 l2">
        <Image 
          className="headshot" 
          src="/images/headshot.jpg" 
          alt="Branislav Bednar headshot"
          width={224}
          height={224}
        />
      </div>
    </div>
  );
}