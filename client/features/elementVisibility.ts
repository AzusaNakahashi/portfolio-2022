import { createSlice } from "@reduxjs/toolkit";
interface Hero {
  componentIsVisible: boolean;
}
interface About {
  componentIsVisible: boolean;
}
interface Projects {
  componentIsVisible: boolean;
}

interface Contact {
  componentIsVisible: boolean;
}

interface ElementVisibility {
  hero: Hero;
  about: About;
  projects: Projects;
  contact: Contact;
}

const initialState: ElementVisibility = {
  hero: { componentIsVisible: false },
  about: { componentIsVisible: false },
  projects: { componentIsVisible: false },
  contact: { componentIsVisible: false },
};

export const elementVisibilitySlice = createSlice({
  name: "elementVisibility",
  initialState,
  reducers: {
    heroVisibilityToggle: (state, actions) => {
      state.hero.componentIsVisible = actions.payload;
    },
    aboutVisibilityToggle: (state, actions) => {
      state.about.componentIsVisible = actions.payload;
    },
    projectsVisibilityToggle: (state, actions) => {
      state.projects.componentIsVisible = actions.payload;
    },
    contactVisibilityToggle: (state, actions) => {
      state.contact.componentIsVisible = actions.payload;
    },
  },
});

export const {
  heroVisibilityToggle,
  aboutVisibilityToggle,
  projectsVisibilityToggle,
  contactVisibilityToggle,
} = elementVisibilitySlice.actions;

export default elementVisibilitySlice.reducer;
