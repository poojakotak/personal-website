// src/components/Resume.js
import React from 'react';
import '../styles/Resume.css';

function Resume() {
    return (
        <section id="resume" className="md:pl-[25%] w-full bg-gray-100">
          <h2 className="text-5xl mx-auto font-bold text-center text-gray-800 mb-6">Resume</h2>
        <div className="max-w-3xl mx-auto p-4 border border-gray-300 shadow-lg bg-white rounded-lg overflow-auto">
  
          {/* Experience Section */}
          <div className="mb-6 text-center">
            <h3 className="text-3xl font-semibold mb-2 text-center">Work Experience</h3>
            {/* Microsoft Experience */}
            <div className="mb-4">
              <h4 className="text-3xl font-bold">Microsoft</h4>
              <h5 className="text-2xl font-semibold">Software Engineer</h5>
              <p className="text-sm mb-2">July 2021 - August 2023</p>
              <ul className="list-disc list-inside text-gray-600 mb-3">
                {/* List of responsibilities and achievements */}
                <li>Led a cross-functional team in enhancing the Information Barrier (IB) feature enforced across all Microsoft Office 365 applications, successfully safeguarding communication integrity for 1000+ enterprise administrators.</li>
                <li>Designed, developed and deployed REST APIs hosted on the Security and Compliance (SCC) portal, improving serviceability by enabling administrators to receive reports on their organization’s data loss prevention (DLP) policies.</li>
                <li>Constructed data visualizations using SQL and Power BI to depict insightful product KPIs i.e. DAU/MAU, retention rate, etc.</li>
                <li>Spearheaded the migration of customer data to align with EU compliance requirements for a company-wide Big Data solution, providing data management and system integrity to customers.</li>
                <li>Built role-based access PowerShell cmdlets in C# used by administrators to create and update their organization’s DLP policies across O365 apps, enhancing user experience and minimizing data loss.</li>
                <li>Authored comprehensive troubleshooting guides and dev designs, improving incident management and team efficiency.</li>
              </ul>
              <h5 className="text-2xl font-semibold">Software Engineer Intern</h5>
              <p className="text-sm mb-2">May 2020 - August 2020</p>
              <ul className="list-disc list-inside text-gray-600 mb-3">
                {/* List of responsibilities and achievements */}
                <li>Developed a React App hosted on the SCC portal for ML data classification testing, generating personalized and realistic test data used both internally and externally to improve machine learning model accuracy for custom sensitivity labels.</li>
              </ul>
              <h5 className="text-2xl font-semibold">Product Management and Software Engineer Intern</h5>
              <p className="text-sm mb-2">May 2019 - August 2019</p>
              <ul className="list-disc list-inside text-gray-600 mb-3">
                {/* List of responsibilities and achievements */}
                <li>Balanced dual roles and lead efforts to improve web performance and SEO on azure.microsoft.com.</li>
                <li>Decreased page load times by 50%, reduced the DOM size by 30%, and implemented an optimal cache control policy.</li>
              </ul>
            </div>
            <div className="mb-4">
              <h4 className="text-3xl font-bold">Ohio State University</h4>
              <h5 className="text-2xl font-semibold">Web Applications Teaching Assistant</h5>
              <p className="text-sm mb-2">July 2021 - August 2023</p>
              <ul className="list-disc list-inside text-gray-600 mb-3">
                {/* List of responsibilities and achievements */}
                <li>Guided students through a comprehensive Project: Design, Development, and Documentation of Web Applications course, delivering hands-on support and constructive feedback with Ruby on Rails, Git, HTML, CSS and JavaScript.</li>
              </ul>
              <h5 className="text-2xl font-semibold">Data Chair</h5>
              <p className="text-sm mb-2">January 2019 - May 2021</p>
              <ul className="list-disc list-inside text-gray-600 mb-2">
                {/* List of responsibilities and achievements */}
                <li>Leveraged statistical analysis to optimize the Pi Beta Phi recruitment process, driving data-informed decisions.</li>
              </ul>
            </div>
            <div className="mb-4">
              <h4 className="text-3xl font-bold">Rockwell Automation</h4>
              <h5 className="text-2xl font-semibold">Cybersecurity Intern</h5>
              <p className="text-sm mb-2">May 2018 - August 2018</p>
              <ul className="list-disc list-inside text-gray-600 mb-3">
                {/* List of responsibilities and achievements */}
                <li>Implemented CI/CD pipelines using Python to automate robust security testing on Rockwell controllers, exposing any potential security vulnerabilities.</li>
              </ul>
              <h5 className="text-2xl font-semibold">Software Engineer Intern</h5>
              <p className="text-sm mb-2">May 2017 - August 2017</p>
              <ul className="list-disc list-inside text-gray-600 mb-10">
                {/* List of responsibilities and achievements */}
                <li>Automated LED light testing on controllers, streamlining the product quality assurance testing process.</li>
              </ul>
            </div>
          </div>
  
          {/* Education Section */}
          <div className="mb-6 text-center">
            <h3 className="text-3xl font-semibold mb-2 text-center">Education</h3>
            <p className="text-2xl font-bold">Ohio State University</p>
            <p className="text-xl">B.S. in Computer Science and Engineering</p>
            <p className="text-l text-gray-600 mb-10">2017 - 2021</p>
          </div>
  
          {/* Certificates Section */}
          <div className="mb-6 text-center">
            <h3 className="text-3xl font-semibold mb-2 text-center">Certificates</h3>
            <p className="text-2xl font-bold">Become a Product Manager</p>
            <p className="text-xl">Udemy Online School</p>
            <p className="text-l mb-3 text-gray-600">November 2023</p>
            <p className="text-2xl font-bold">Technical Product Manager</p>
            <p className="text-xl">Product Management Institute (PMI)</p>
            <p className="text-l mb-3 text-gray-600">September 2023</p>
            <p className="text-2xl font-bold">The Complete Python Bootcamp</p>
            <p className="text-xl">Udemy Online School</p>
            <p className="text-l mb-3 text-gray-600 mb-10">August 2023</p>
          </div>
  
          {/* Skills Section */}
          <div className="mb-6">
            <h3 className="text-3xl font-semibold mb-2 text-center">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {/* List of skills */}
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">Product Management</span>
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">Python</span>
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">SQL</span>
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">React</span>
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">Agile</span>
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">Product Design</span>
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">Data Analysis</span>
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">A/B Testing</span>
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">Stakeholder Management</span>
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">UX/UI Design</span>
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">Java</span>
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">C#</span>
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">JavaScript</span>
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">HTML/CSS</span>
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">Ruby on Rails</span>
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">Linux</span>
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">Unix</span>
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">Git</span>
              {/* Add more skills */}
            </div>
          </div>
        </div>
      </section>
    );
  }
  

export default Resume;