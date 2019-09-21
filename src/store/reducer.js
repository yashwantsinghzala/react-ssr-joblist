const initialState = {
  jobs: [
    {
      id: "1",
      title: "Frontend Developer",
      description: "Compfotable with",
      employmentType: "full_time"
    },
    {
      id: "2",
      title: "Backend Developer",
      description: "Compfotable with",
      employmentType: "full_time"
    }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_JOB":
      return {
        jobs: [...state.jobs, action.payload]
      };
    default:
      return state;
  }
};
