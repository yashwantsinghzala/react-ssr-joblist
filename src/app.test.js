import { cloneDeep, set } from "lodash";
import React from "react";
import { shallow } from "./enzyme";
import JobList from "./components/JobList/JobList";
import JobDetail from "./components/JobDetail/JobDetail";
import { shallowToJson } from "enzyme-to-json";
import reducer, { initialState } from "./store/reducer";
import App from "./App";
import AppContainer from "./AppContainer";

describe("snapshot test for components", () => {
  it("JobList component", () => {
    const jobs = cloneDeep(initialState).jobs;
    const output = shallow(<JobList jobs={jobs} />);
    expect(shallowToJson(output)).toMatchSnapshot();
  });

  it("Elemets of jobList component", () => {
    const jobs = cloneDeep(initialState).jobs;
    const component = shallow(<JobList jobs={jobs} />);
    expect(component.getElements()).toMatchSnapshot();
  });

  it("JobDetails component", () => {
    const jobs = cloneDeep(initialState).jobs;
    // job id will be passed as parameter through routing
    const otherProps = set({}, "match.params.jobId", 1);
    const output = shallow(<JobDetail jobs={jobs} {...otherProps} />);
    expect(shallowToJson(output)).toMatchSnapshot();
  });

  it("App component", () => {
    const output = shallow(<App />);
    expect(shallowToJson(output)).toMatchSnapshot();
  });

  it("App container", () => {
    const output = shallow(<AppContainer />);
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});

describe("renders job list-items", () => {
  it("should match the count of list of jobs", () => {
    const jobs = cloneDeep(initialState).jobs;
    const wrapper = shallow(<JobList jobs={jobs} />);
    // Expect the wrapper object to be defined
    expect(wrapper.find(`[data-test='job-list']`)).toBeDefined();
    expect(wrapper.find(`[data-test='job-item']`)).toHaveLength(jobs.length);
  });
});

describe("reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toMatchSnapshot();
  });

  it("should get request", () => {
    expect(
      reducer(initialState, {
        type: "GET_JOBS"
      })
    ).toMatchSnapshot();
  });
});
