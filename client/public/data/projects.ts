interface feature {
  keyphrase: String;
  description: String;
}

interface Project {
  basicInfo: {
    name: String;
    type: String;
    duration: String;
    explanation: String;
    liveURL: String | null;
    github: String;
  };
  features: {
    explanation: String | null;
    features: Array<feature>;
  };
  technology: {
    techs: String[];
    explanation: String;
  };
  list: {
    motive: String[] | null;
    techGoal: String[] | null;
    projectManagement: String[] | null;
    implementedTechnology: String[] | null;
  };
}
const whereverWeather: Project = {
  basicInfo: {
    name: "Wherever Weather",
    type: "Mobile App",
    duration: "2022 May - 2022 July",
    explanation:
      "It allows you to find the weather information from your current location, search bar, and map pin.",
    liveURL: "https://wherever-forecast.vercel.app/",
    github: "",
  },
  features: {
    explanation: "You can find wehater from...",
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
    explanation:
      "Next js is for the better loading performance. Redux keeps the map state and the weather state across the pages. Google Maps API shows the maps and gets the location data. Weather data is from AccuWeather API. Node.js is used to secure fetching the data from API.",
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
    implementedTechnology: [
      "Redux allows keeping all states for map coordinates and weather information.",
      "An interactive map is created using Google Maps API.",
      "Node.js secures API access by allowing only the front-end URL to call the weather API.",
    ],
  },
};

export const projectsData: Project[] = [whereverWeather];
