import type { Project } from "../../../types/projectType";

const portfolio: Project = {
  basicInfo: {
    name: "Portfolio",
    path: "portfolio",
    type: "website",
    duration: "2022 Sep - 2022 Nov",
    explanation:
      "A portfolio website that displays all of the projects and provides a contact form",
    liveURL: null,
    github: "https://github.com/AzusaNakahashi/portfolio-2022",
  },
  features: {
    intro: null,
    features: null,
  },
  technology: {
    techs: [
      "Next.js",
      "Redux",
      "TypeScript",
      "Sass",
      "Node.js",
      "Express",
      "Git",
    ],
    pointList: [
      "Animation with CSS and intersection observer.",
      "TypeScript is used for better code consistency and to prevent unexpected errors.",
      "Node.js is used to send data from the form.",
    ],
  },
  list: {
    motive: {
      title: "Motive",
      text: ["Displaying the projects I worked on."],
    },
    techGoal: { title: "Tech Goals", text: null },
    projectManagement: {
      title: "Project Management",
      text: ["Used Git to prevent errors and keep track of progress."],
    },
  },
};

const whereverWeather: Project = {
  basicInfo: {
    name: "Wherever Weather",
    path: "whereverWeather",
    type: "Web Application",
    duration: "2022 May - 2022 July",
    explanation:
      "It allows you to find the weather information from your current location, search bar, and map pin.",
    liveURL: "https://wherever-forecast.vercel.app/",
    github: "https://github.com/AzusaNakahashi/weather-app-with-map",
  },
  features: {
    intro: "You can find wehater from...",
    features: [
      {
        keyphrase: "Current Location",
        description:
          "When the app opens, it automatically fetches your current location. You can also refetch the weather by clicking the present location button.",
      },
      {
        keyphrase: "Search Bar",
        description:
          "You can get the weather of a specific location by typing in the search box. ",
      },
      {
        keyphrase: "Map Pin",
        description:
          "Just clicking/tapping a location on the maps allows you to get the weather infomation.",
      },
    ],
  },
  technology: {
    techs: [
      "Next.js",
      "Redux",
      "Sass",
      "REST API",
      "Node.js",
      "Express",
      "Git",
    ],
    pointList: [
      "Redux allows the app to keep all states of map coordinates and weather information.",
      "Google Maps API shows the maps and gets the location data.",
      "Weather data is from AccuWeather API.",
      "Node.js secures API access by allowing only the front-end URL to call the weather API.",
      "I created all designs including wireframes and mockups. Some weather icons are from Font Awesome.",
    ],
  },
  list: {
    motive: {
      title: "Motive",
      text: [
        "This project was created as a personal project to learn more about Redux, the data flow between fontend and backend.",
      ],
    },
    techGoal: {
      title: "Tech Goals",
      text: [
        "Understanding how front-end and back-end are connected.",
        "Understanding Google Maps API",
        "Learning Redux",
      ],
    },
    projectManagement: {
      title: "Project Management",
      text: [
        "Used Git to prevent unexpected errors and keep track of progress.",
        "Trello was used for planning and listing what has to be done.",
      ],
    },
  },
};

const grabo: Project = {
  basicInfo: {
    name: "Grabo",
    path: "grabo",
    type: "Hybrid Mobile Application",
    duration: "2021 Sep - 2021 Dec",
    explanation:
      "Grabo is a language-based community app where people exchange information about products from all over the world.",
    liveURL: null,
    github: "https://github.com/satoshinbp/grabo",
  },
  features: {
    intro: "When you have a question about foreigh products...",
    features: [
      {
        keyphrase: "select your language",
        description:
          "To join the community, you first need to choose your native language. Then, whenever you can, answer people's questions about the products written in your language and help others!",
      },
      {
        keyphrase: "scan the product",
        description:
          "take a picture of the product in a foreign language, and write down questions about the product. People who know the product will try to answer your question.",
      },
    ],
  },
  technology: {
    techs: ["React Native", "Redux", "Sass", "Node.js", "Express", "MongoDB"],
    pointList: [
      "Detect a language from google api",
      "Log-in log-out implementation",
      "Manage products information with Redux",
      "Search products from MongoDB",
      "In this project, I have worked on developing CRUD functions of the products.",
    ],
  },
  list: {
    motive: {
      title: "Motive",
      text: [
        "This is the last term project from Langara college Web and Mobide Design and Development course (development stream.)",
        "The team was conposed of 6 members: 4 developers and 2 designers.",
        "The purpose of this project was to create a hybrid/mobile app. As we had already developed apps with React.js, we chose React Native as a development tool.",
      ],
    },
    techGoal: {
      title: "Tech Goals",
      text: [
        "The app recognizes the language of the product from the phone camera.",
        "Learning React Native, Redux, MongoDB",
      ],
    },
    projectManagement: {
      title: "Project Management",
      text: [
        "A regular weekly meeting.",
        "Followed agile development. Created an alpha version and a beta version for testing.",
        "Used Git for development efficiency and accuracy.",
        "Tracked team members' progress and managed tasks with Trello",
      ],
    },
  },
};

const petPaws: Project = {
  basicInfo: {
    name: "Pet Paws",
    path: "petPaws",
    type: "Full Stack Web Application",
    duration: "2021 May - 2021 July",
    explanation:
      "You can keep track of your pet's daily calorie intake and exercise amount on the graph. It also calculates the ideal weight and provides vet/pet supply store infomation.",
    liveURL: null,
    github: "https://github.com/satoshinbp/PetPaws",
  },
  features: {
    intro: null,
    features: null,
  },
  technology: {
    techs: [
      "React.js",
      "Sass",
      "Node.js",
      "Express",
      "MySQL",
      "Firebase",
      "Git",
    ],
    pointList: [
      "Our first time to create a project with SQL (MySQL).",
      "Data stored in MySQL (users' profile data, pet's calorie and exercise data.), fetched with Node.js (Express).",
      "I mainly worked on the tracking pages, where the calorie graph and exercise graph are shown",
    ],
  },
  list: {
    motive: {
      title: "Motive",
      text: [
        "This website was created as a Web and Mobile App Design and Development course (development stream) second project.",
        "The team was composed of 4 developers and 3 designers",
      ],
    },
    techGoal: {
      title: "Tech Goals",
      text: ["To understand the mechanism of back-end"],
    },
    projectManagement: {
      title: "Project Management",
      text: [
        "Incorporation of agile practice",
        "Weekly meeting.",
        "Created two test versions and fixed problems",
        "Use Trello for task tracking",
      ],
    },
  },
};

const cheers: Project = {
  basicInfo: {
    name: "Cheers!",
    path: "cheers",
    type: "Progressive Web Application",
    duration: "2021 Jan - 2021 Apr",
    explanation:
      "This is a review website entirely about alcohol drinks! You can find the best drinks and bars that match your exact taste.",
    liveURL: null,
    github: "https://github.com/nori3506/cheers",
  },
  features: {
    intro: null,
    features: [
      {
        keyphrase: "Search",
        description: "You can find bars, restaurants, and drinks on the map.",
      },
      {
        keyphrase: "Read a review",
        description:
          "You can read reviews about the drinks you are curious about.",
      },
      {
        keyphrase: "Write a review",
        description:
          "You can write a review about the drinks you tried. Share your opinion with others.",
      },
    ],
  },
  technology: {
    techs: ["React.js", "Sass", "Firebase", "Git"],
    pointList: [
      "First time using React.js",
      "We used Firebase to mock the functionality.",
      "I mainly worked on the page that shows reviews.",
    ],
  },
  list: {
    motive: {
      title: "Motive",
      text: [
        "This website was created as a Web and Mobile App Design and Development course (development stream) first team project.",
        "The team was composed of 4 developers and 1 designer",
      ],
    },
    techGoal: {
      title: "Tech Goals",
      text: [
        "Get familiar with React.js",
        "Get familiar with the CRUD process.",
      ],
    },
    projectManagement: {
      title: "Project Management",
      text: [
        "Incorporation of agile practice",
        "Weekly meeting.",
        "Created two test versions to fix problems",
        "Use Trello for task tracking",
      ],
    },
  },
};

export const projectsData: Project[] = [
  portfolio,
  whereverWeather,
  grabo,
  petPaws,
  cheers,
];
