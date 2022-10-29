interface feature {
  keyphrase: string | null;
  description: string | null;
}

interface Project {
  basicInfo: {
    name: string;
    path: string;
    type: string;
    duration: string;
    explanation: string;
    liveURL: string | null;
    github: string;
  };
  features: {
    intro: string | null;
    features: Array<feature> | null;
  };
  technology: {
    techs: string[];
    pointList: string[];
  };
  list: {
    motive: string[] | null;
    techGoal: string[] | null;
    projectManagement: string[] | null;
  };
}
const whereverWeather: Project = {
  basicInfo: {
    name: "Wherever Weather",
    path: "whereverWeather",
    type: "Mobile App",
    duration: "2022 May - 2022 July",
    explanation:
      "It allows you to find the weather information from your current location, search bar, and map pin.",
    liveURL: "https://wherever-forecast.vercel.app/",
    github: "",
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
    techs: ["Next.js", "Redux", "SASS", "REST API", "Node.js", "Git"],
    pointList: [
      "Redux allows keeping all states for map coordinates and weather information.",
      "An interactive map is created using Google Maps API.",
      "Node.js secures API access by allowing only the front-end URL to call the weather API.",
    ] /*
    explanation:
      "Next.js is for better loading performance. Redux keeps the map state and the weather state across the pages. Google Maps API shows the maps and gets the location data. Weather data is from AccuWeather API. Node.js is used to secure fetching the data from API.",*/,
  },
  list: {
    motive: [
      "This project was created as a personal project to deepen the programming knowledge",
    ],
    techGoal: [
      "Understanding how front-end and back-end are connected.",
      "Using Google Maps API",
      "Learning the basics of Redux",
    ],
    projectManagement: [
      "Though this is a personal project, Trello was used to manage the ideas and development effeciently. ",
    ],
  },
};

const grabo: Project = {
  basicInfo: {
    name: "grabo",
    path: "grabo",
    type: "native app",
    duration: "2021 Sep - 2021 Dec",
    explanation:
      "Grabo is a language-based community app where people exchange information of the products from all over the world.",
    liveURL: null,
    github: "",
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
          "take a picture of the product in a foreign language, write down questions about the product.",
      },
      {
        keyphrase: "get answers",
        description: "people who know the product will answer your question.",
      },
    ],
  },
  technology: {
    techs: ["React Native", "Redux", "SASS", "Node.js", "Express", "MongoDB"],
    pointList: [
      "Detect a language from google api",
      "Log-in log-out implementation",
      "manage products information with Redux",
      "search products from MongoDB",
    ],
    /*explanation:
      "In order to create a native application, our team chose React Native as the front-end development tool. We also tried Redux and MongoDB for the first time in this project for practice and better effeciency.",*/
  },
  list: {
    motive: [
      "This is the last term project from Langara college Web and Mobide Design and Development course (development stream.)",
      "The team was conposed of 6 members: 4 developers and 2 designers.",
      "The purpose of this project is creating a native app, as we already learned how to develop with React.js before, we chose React Native as a development tool.",
    ],
    techGoal: [
      "The app recognizes the language of the product from the phone camera.",
      "Learning React Native, Redux, MongoDB",
    ],
    projectManagement: [
      "Regular meeting per week.",
      "Follow agile development. Created alpha version and beta virsion for testing.",
      "Use git for development effeciency and accuracy.",
      "Track team members progress and manage tasks by Trello",
    ],
  },
};

const portfolio: Project = {
  basicInfo: {
    name: "portfolio",
    path: "portfolio",
    type: "website",
    duration: "2022 Sep - 2022 Oct",
    explanation:
      "Portfolio website that displays all of the projects I was in and provides the contact form",
    liveURL: null,
    github: "",
  },
  features: {
    intro: null,
    features: null,
  },
  technology: {
    techs: ["Next.js", "Redux", "SASS", "Node.js", "Express", "Git"],
    pointList: [
      "Animation (menu, heading letters)",
      "Contact form with Nodemailer",
    ],
    /*explanation:
      "For better rendering, I went for Next.js. As the website has a contact form, I used Node.js and enabled sending emails with Nodemailer.",*/
  },
  list: {
    motive: ["Displaying the project I worked on on one website."],
    techGoal: ["Learning Next.js", "Creating a form"],
    projectManagement: [
      "Git for preventing errors and keeping the track of progress.",
    ],
  },
};

export const projectsData: Project[] = [portfolio, whereverWeather, grabo];
