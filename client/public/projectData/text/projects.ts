import type { Project } from "../../../types/projectType";

const whereverWeather: Project = {
  basicInfo: {
    name: "Wherever Weather",
    path: "whereverWeather",
    type: "Mobile App",
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
          "When the app is opened, it automatically fetchs your current location. You can also refetch the weather by clicking the current location  button",
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
    techs: ["Next.js", "Redux", "Sass", "REST API", "Node.js", "Git"],
    pointList: [
      "Redux allows keeping all states for map coordinates and weather information.",
      "An interactive map is created using Google Maps API.",
      "Node.js secures API access by allowing only the front-end URL to call the weather API.",
    ],
  },
  list: {
    motive: {
      title: "Motive",
      text: [
        "This project was created as a personal project to deepen the programming knowledge",
      ],
    },
    techGoal: {
      title: "Tech Goals",
      text: [
        "Understanding how front-end and back-end are connected.",
        "Using Google Maps API",
        "Learning the basics of Redux",
      ],
    },
    projectManagement: {
      title: "Project Management",
      text: [
        "Though this is a personal project, Trello was used to manage the ideas and development effeciently. ",
      ],
    },
  },
};

const grabo: Project = {
  basicInfo: {
    name: "Grabo",
    path: "grabo",
    type: "native app",
    duration: "2021 Sep - 2021 Dec",
    explanation:
      "Grabo is a language-based community app where people exchange information of the products from all over the world.",
    liveURL: null,
    github: "https://github.com/satoshinbp/grabo",
  },
  features: {
    intro: "When you have a question about foreigh products...",
    features: [
      {
        keyphrase: "select your language",
        description:
          "To join the community, you first need to choose your native language. When you can, answer people's questions about the products written in your language and help others!",
      },
      {
        keyphrase: "scan the product",
        description:
          "take a picture of the product of a foreign language, write down questions about the product.",
      },
      {
        keyphrase: "get answers",
        description: "people who know the product will answer your question.",
      },
    ],
  },
  technology: {
    techs: ["React Native", "Redux", "Sass", "Node.js", "Express", "MongoDB"],
    pointList: [
      "Detect a language from google api",
      "Log-in log-out implementation",
      "manage products information with Redux",
      "search products from MongoDB",
    ],
  },
  list: {
    motive: {
      title: "Motive",
      text: [
        "This is the last term project from Langara college Web and Mobide Design and Development course (development stream.)",
        "The team was conposed of 6 members: 4 developers and 2 designers.",
        "The purpose of this project is creating a native app, as we already learned how to develop with React.js before, we chose React Native as a development tool.",
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
        "Regular meeting per week.",
        "Follow agile development. Created alpha version and beta virsion for testing.",
        "Use git for development effeciency and accuracy.",
        "Track team members progress and manage tasks by Trello",
      ],
    },
  },
};

const portfolio: Project = {
  basicInfo: {
    name: "portfolio",
    path: "portfolio",
    type: "website",
    duration: "2022 Sep - 2022 Oct",
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
    pointList: ["Animation", "Contact form"],
  },
  list: {
    motive: {
      title: "Motive",
      text: ["Displaying the project I worked on on one website."],
    },
    techGoal: { title: "Tech Goals", text: null },
    projectManagement: {
      title: "Project Management",
      text: ["Git for preventing errors and keeping the track of progress."],
    },
  },
};

const petPaws: Project = {
  basicInfo: {
    name: "PetPaws",
    path: "petPaws",
    type: "website",
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
    techs: ["React.js", "Node.js", "Express", "MySQL", "Firebase", "Git"],
    pointList: [
      "I mainly worked on the tracking pages, where the calorie graph and exercise graph are shown",
      "Data stored in MySQL (users' profile data, pet's calorie and exercise data.), fetched with Node.js (Express).",
    ],
  },
  list: {
    motive: {
      title: "Motive",
      text: [
        "This website was created as Web and Mobile App Design and Development course (development stream) term 3 team project.",
        "The team was composed of four developers and three designers",
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
    name: "cheers",
    path: "cheers",
    type: "PWA",
    duration: "2021 May - 2021 July",
    explanation:
      "You can keep track of your pet's daily calorie intake and exercise amount on the graph. It also calculates the ideal weight and provides vet/pet supply store infomation.",
    liveURL: null,
    github: "https://github.com/nori3506/cheers",
  },
  features: {
    intro: null,
    features: [
      { keyphrase: "search", description: "search" },
      { keyphrase: "leave a review", description: "write a review" },
      { keyphrase: "read a review", description: "read a review" },
    ],
  },
  technology: {
    techs: ["React.js", "Node.js", "Express", "MySQL", "Firebase", "Git"],
    pointList: [
      "I mainly worked on the tracking pages, where the calorie graph and exercise graph are shown",
      "Data stored in MySQL (users' profile data, pet's calorie and exercise data.), fetched with Node.js (Express).",
    ],
  },
  list: {
    motive: {
      title: "Motive",
      text: [
        "This website was created as Web and Mobile App Design and Development course (development stream) term 3 team project.",
        "The team was composed of four developers and three designers",
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

export const projectsData: Project[] = [
  whereverWeather,
  portfolio,
  grabo,
  cheers,
  petPaws,
];
