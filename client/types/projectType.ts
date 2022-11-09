type Feature = {
  keyphrase: string | null;
  description: string | null;
};

export type Project = {
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
    features: Array<Feature> | null;
  };
  technology: {
    techs: string[];
    pointList: string[];
  };
  list: {
    motive: { title: "Motive"; text: string[] | null };
    techGoal: { title: "Tech Goals"; text: string[] | null };
    projectManagement: { title: "Project Management"; text: string[] | null };
  };
};
