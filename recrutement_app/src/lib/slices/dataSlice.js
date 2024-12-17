
import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  personalInfo: {},
  experience: [],
  skills: [],
    cvFile: null,
  };
  
//initialisation de la dataSlice et création des fonction de manipulation de la donnée a stocker
const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setPersonalInfo: (state, action) => {
            state.personalInfo = action.payload;
        },
        addExperience: (state, action) => {
            state.experience = action.payload;
        },
        addSkills: (state, action) => {
            state.skills = action.payload;
        },
        setCvFile: (state, action) => {
          state.cvFile = action.payload; 
        },
    },
});

export const { setPersonalInfo, addExperience, addSkills,setCvFile } = dataSlice.actions;
export default dataSlice.reducer;
