/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
    animated: true // set to false to use static SVG
};

const greeting = {
    username: "Ankur Chauhan",
    title: "Hi all, I'm Ankur",
    subTitle: emoji(
        "A passionate Full Stack Software Developer 🚀 having an experience of building Web applications with Java, JavaScript / Angular/ Reactjs / Nodejs and some other cool libraries and frameworks."
    ),
    resumeLink: "https://docs.google.com/document/d/1mV-2g0nxc3HiWf0Kh8yo-XKqniaBWBECv7UeWYCL6vo/edit?usp=sharing",
    displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
    github: "https://github.com/chauhanx",
    linkedin: "https://www.linkedin.com/in/ankurchauhan01/",
    gmail: "chauhanankur94@gmail.com",
    gitlab: "https://gitlab.com/saadpasta",
    facebook: "https://www.facebook.com/saad.pasta7",
    medium: "https://medium.com/@saadpasta",
    stackoverflow: "https://stackoverflow.com/users/6622186/ankur-chauhan",
    // Instagram and Twitter are also supported in the links!
    display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
    title: "What I do",
    subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
    skills: [
        emoji(
            "⚡ Develop highly interactive Full Stack Web Applications"
        ),
        emoji(
            "⚡ Deployment of web applications on server such as AWS / Heroku"
        )
    ],

    /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

    softwareSkills: [{
            skillName: "html-5",
            fontAwesomeClassname: "fab fa-html5"
        },
        {
            skillName: "css3",
            fontAwesomeClassname: "fab fa-css3-alt"
        },
        {
            skillName: "sass",
            fontAwesomeClassname: "fab fa-sass"
        },
        {
            skillName: "JavaScript",
            fontAwesomeClassname: "fab fa-js"
        },
        {
            skillName: "reactjs",
            fontAwesomeClassname: "fab fa-react"
        },
        {
            skillName: "angular",
            fontAwesomeClassname: "fab fa-angular"
        },
        {
            skillName: "nodejs",
            fontAwesomeClassname: "fab fa-node"
        },
        // {
        //     skillName: "swift",
        //     fontAwesomeClassname: "fab fa-swift"
        // },
        {
            skillName: "npm",
            fontAwesomeClassname: "fab fa-npm"
        },
        {
            skillName: "sql-database",
            fontAwesomeClassname: "fas fa-database"
        },
        {
            skillName: "aws",
            fontAwesomeClassname: "fab fa-aws"
        },
        {
            skillName: "redis",
            fontAwesomeClassname: "fas fa-fire"
        },
        // {
        //     skillName: "python",
        //     fontAwesomeClassname: "fab fa-python"
        // },
        {
            skillName: "docker",
            fontAwesomeClassname: "fab fa-docker"
        }
    ],
    display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
    display: true, // Set false to hide this section, defaults to true
    schools: [{
            schoolName: "Northeastern University",
            logo: require("./assets/images/neu.png"),
            subHeader: "Master of Science in Information Systems (GPA 4)",
            duration: "January 2021 - December 2022",
            desc: "Took courses about Data Management & Design, Application Engineering and Development, Web Design & User Experience",
            descBullets: [
                // "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                // "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            ]
        },
        {
            schoolName: "Gautam Buddha University",
            logo: require("./assets/images/gbu.jpeg"),
            subHeader: "Integrated Dual Degree Bachelor + Master of Technology",
            duration: "August 2012 - June 2017",
            desc: "Major in Computer Science and Specialization in Software Engineering",
            // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
        }
    ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
    viewSkillBars: true, //Set it to true to show Proficiency Section
    experience: [{
            Stack: "Frontend", //Insert stack or technology you have experience in
            progressPercentage: "80%" //Insert relative proficiency in percentage
        },
        {
            Stack: "Backend",
            progressPercentage: "75%"
        },
        {
            Stack: "Programming",
            progressPercentage: "75%"
        }
    ],
    displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
    display: true, //Set it to true to show workExperiences Section
    experience: [{
            role: "Software Engineer",
            company: "Appinventiv",
            companylogo: require("./assets/images/appinventiv.png"),
            date: "Sept 2018 – Dec 2020",
            desc: "Worked as a full-stack software engineer responsible for web applications mostly using Javascript frameworks",
            descBullets: [
                "Deployed a couple of applications on aws and client's on-premises servers",
            ]
        },
        {
            role: "Software Associate",
            company: "Safe Security",
            companylogo: require("./assets/images/safe.jpeg"),
            date: "June 2017 – August 2018",
            desc: "Developed Admin Panel as well as the On-boarding process of the platform",
            descBullets: [
                "Handled the bug fixing and changes in functionalities of the security product in the beginning"
            ]

        },
        {
            role: "Software Engineer Intern",
            company: "Dell Technologies",
            companylogo: require("./assets/images/dell.png"),
            date: "Jan 2017 – April 2017",
            desc: ""
        }
    ]
};

const academicProjects = {
    display: true, //Set it to true to show workExperiences Section
    experience: [{
            role: "Software Engineer",
            company: "Appinventiv",
            companylogo: require("./assets/images/appinventiv.png"),
            date: "Sept 2018 – Dec 2020",
            desc: "Worked as a full-stack software engineer responsible for web applications mostly using Javascript frameworks",
            descBullets: [
                "Deployed a couple of applications on aws and client's on-premises servers",
            ]
        },
        {
            // role: "Software Associate",
            company: "Food Wastage Management System",
            companylogo: require("./assets/images/safe.jpeg"),
            date: "Food Wastage Management System",
            desc: "EcoSystem, Java, JDBC, SQL",
            descBullets: [
                "Ecosystem model to bridge the gap between food wastage and its efficiently utilization"
            ]

        },
        {
            role: "Software Engineer Intern",
            company: "Procurement Management Database System",
            companylogo: require("./assets/images/dell.png"),
            // date: "Jan 2017 – April 2017",
            desc: "SQL, Tableau"
        }
    ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
    showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
    display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
    title: "Big Projects",
    subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
    projects: [{
            image: require("./assets/images/toki.png"),
            projectName: "Toki",
            projectDesc: "A social business marketplace to connect people and local businessess",
            footerLink: [{
                name: "Visit Website",
                url: "https://toki.mn/"
            }]
        },
        {
            image: require("./assets/images/qd.png"),
            projectName: "Quick Delivery",
            projectDesc: "A service to track and deliver items",
            footerLink: [{
                name: "Visit Website",
                url: "https://www.quickdeliveryco.com/"
            }]
        }
    ],
    display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
    title: emoji("Achievements And Certifications 🏆 "),
    subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

    achievementsCards: [{
            title: "Google Code-In Finalist",
            // subtitle: "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
            image: require("./assets/images/codeInLogo.webp"),
            footerLink: [{
                name: "Certification",
                // url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
            }]
        }

    ],
    display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
    title: emoji("Contact Me ☎️"),
    subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
    number: "+1-6178200135",
    email_address: "chauhanankur94@gmail.com"
};

export {
    illustration,
    greeting,
    socialMediaLinks,
    skillsSection,
    educationInfo,
    techStack,
    workExperiences,
    openSource,
    bigProjects,
    achievementSection,
    contactInfo,
    academicProjects
};