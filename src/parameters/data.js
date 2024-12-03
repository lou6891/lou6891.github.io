
export const personal_data = {

    User_Name_Surname : "Luca Conti",
    GitHub_name : "lou6891",
    Linkedin_url : "https://www.linkedin.com/in/lucaconti1999/",
    // Website_url : "https://linktr.ee/lucaconti",

    About_Page : {
        Professional_summary:
        
            "I am a passionate professional from Varese, Italy, with a rich international background, having lived and worked across" +
            "the USA, London, Turin, Berlin, China, Madrid, and most recently, Barcelona. \n" +
            // "\n" +
            "My academic journey includes a Bachelor's degree in Management from ESCP Europe, where I graduated with high honors. This was " +
            "followed by a dual Master's degree from IE University in Management, and Computer Science & Business Technology, also with " +
            "high honors. \n" +
            // "\n" +
            "My career began with a focus on quality control, project management, and business development. After working in monitoring and " +
            "control, I decided to transition to a more technical role. This led me to become a MLOps Engineer at EcoVadis, where I developed " +
            "key automation tools and implemented advanced AI solutions. \n" +
            // "\n" +
            "I pride myself on my problem-solving skills, my ability to lead cross-cultural teams, and my relentless pursuit of excellence. I " +
            "am always eager to connect with like-minded professionals, explore new technologies, and engage in meaningful conversations.",


        Professional_experiences :[
            {
                company_name: "EcoVadis",
                company_information: "A global leader in sustainability ratings for supply chains, helping organizations improve their environmental and social practices.",
                date_start: "February 2023",
                date_end: "Present",
                locations: [
                    "Barcelona, Catalonia, Spain"
                ],
                position_name: "Junior MLOps Engineer",
                position_information: [
                    "Presented work at the 27th ECAI conference in Santiago de Compostela.",
                    "Developed multi-agent LLM-based Chatbot FastAPI solutions from testing to production.",
                    " Developed testing methodology for LLM hallucinations, LLM latency, AI Safety. ",
                    "Developed Azure Infrastructure as Code (IaC) to deploy Dockerized applications.",
                    "Managed data contracts with the frontend team.",
                    "Performed evaluation of multiple LLMs in terms of latency, reliability, quality, and hallucinations.",
                    "Applied prompt engineering on state-of-the-art multi-agent LLM solutions.",
                    "Presented AI safety and security development methodologies to the team.",
                    "Created a development framework for integrating new LLMs, applying prompt engineering, and testing solutions for hallucination, latency, and safety."
                ]
            },
            {
                company_name: "EcoVadis",
                date_start: "September 2023",
                date_end: "February 2024",
                locations: [
                    "Barcelona, Catalonia, Spain"
                ],
                position_name: "MLOps Engineer Intern",
                position_information: [
                    "Developed an automated firefighter bot to warn the team of potential issues with production resources and data pipelines.",
                    "Implemented Infrastructure as Code (IaC) using Azure's Bicep.",
                    "Secured Azure workspaces using Azure Active Directory (AAD) and private endpoints.",
                    "Implemented a content filter for hate speech and depression detection in chatbots using Hugging Face's models.",
                    "Contributed to creating and deploying a multi-source GPT-based conversational bot using Accelerator solutions.",
                    "Applied prompt engineering to control the behavior of GPT agents."
                ]
            },
            {
                company_name: "Axión",
                company_information: "A leading provider of telecommunications infrastructure and solutions.",
                date_start: "May 2023",
                date_end: "June 2023",
                locations: [
                    "Madrid, Community of Madrid, Spain"
                ],
                position_name: "Project Management Intern",
                position_information: [
                    "Oversaw an asset carve-out representing ~50% of Axión's total revenues, bridging communication between PMO and IT teams.",
                    "Identified and addressed technical challenges, creating a contingency plan to ensure smooth project execution.",
                    "Enhanced reporting by providing detailed GANTT charts and comprehensive reports to the PMO office.",
                    "Navigated language barriers and cultural nuances to ensure seamless collaboration and project progression."
                ]
            },
            {
                company_name : "Centro Style S.P.A",
                company_information  : "Family company that serve the need of optical show in more than 80 countries since 40 years",
                date_start : "September 2022",
                date_end : "July 2023",
                locations : [
                    "Varese, IT"
                ],
                position_name : "monitoring and Controlling",
                position_information : [
                    "Developed a model for the order workflow for goods not for resale. " +
                    "Automated and streamlined the process from a paper one to a excel model, using the SQL language and structured a plan for the further implementation of the process in BI",
                    "Participated in the editing and analysis of business units P&L, forecasting P&L and budget, with the Financial team we \n" +
                    "created a model for the forecast of the P&L, including sales and costs budgets of different business Units",
                    "Curated the monthly reporting of key financial and commercial indicators to the department managers",
                ],

            },

        ],

        
        Education :[
            {
                school_name : "IE School of Science and Technology",
                date_start : "September 2022",
                date_end : "July 2023",
                program : "Master in Computer Science and Business Technology",
                locations : [
                    "Madrid, ES",
                ],
                information : [
                    "Used Python for machine learning and data analytics",
                    "Knowledge about cloud systems, infrastructure and development",
                    "Graduated with 3.8 GPA",
                    "Dean's list award",
                ],

            },

            {
                school_name : "IE Business School",
                date_start : "January 2022",
                date_end : "July 2023",
                program : "Master in Management",
                locations : [
                    "Madrid, ES",
                ],
                information : [
                    "Dean's list award",
                    "Awarded membership into Beta Gamma Sigma",
                    "Graduated with 3.8 GPA",
                ],

            },

            {
                school_name : "ESCP European Business School",
                date_start : "September 2022",
                date_end : "July 2023",
                program : "Bachelor in Management",
                locations : [
                    "London, UK",
                    "Turin, IT",
                    "Berlin, DE"
                ],
                information : [
                    "Dean's list award for two consecutive years",
                    "Graduated with High Honors and 3.8 GPA",
                ],

            },

        ],

        IT_skills : [
            "NodeJs",
            "ReactJs",
            "Python",
            "Dockerfile",
            "CSS",
            "HTML",
            "AWS",
            "Google Cloud",
            "Azure",
        ],

        // Write all the languges in english, key = Language name, value = level of the language
        Languages : [
            // Language name  : level from 0 to 5, 0 being never spoken, 5 being native
            ["Italian" , 5, "Native"],
            ["English" , 4, "Fluent"],
            ["Spanish" , 3, "Limited Working proficiency"],
        ],


    },
}