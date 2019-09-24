export const initialState = {
  jobs: [
    {
      id: "1",
      title: "Frontend React Developer",
      description:
        "Compfotable with React and all related front end Technologies",
      employmentType: "full_time"
    },
    {
      id: "2",
      title: "Backend Java Developer",
      description:
        "Compfotable with Java and all related back end Technologies",
      employmentType: "full_time",
      employmentType: "full_time"
    },
    {
      id: "3",
      title: "Frontend Angular Developer",
      description:
        "Compfotable with Angular and all related front end Technologies",
      employmentType: "full_time"
    },
    {
      id: "4",
      title: "Backend Dotnet Developer",
      description:
        "Compfotable with Dotnet and all related Backend end Technologies",
      employmentType: "part_time"
    }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
