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

interface ElementVisibility {
  hero: Hero;
  about: About;
  projects: Projects;
}

const initialState: ElementVisibility = {
  hero: { componentIsVisible: false },
  about: { componentIsVisible: false },
  projects: { componentIsVisible: false },
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
  },
});

export const {
  heroVisibilityToggle,
  aboutVisibilityToggle,
  projectsVisibilityToggle,
} = elementVisibilitySlice.actions;

export default elementVisibilitySlice.reducer;
