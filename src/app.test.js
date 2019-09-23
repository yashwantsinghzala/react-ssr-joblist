import cloneDeep from "lodash/cloneDeep";
import React from "react";
import { shallow } from "./enzyme";
import JobList from "./components/JobList/JobList";
import { initialState } from "./store/reducer";

describe("test joblist component", () => {
  it("renders list-jobs", () => {
    const jobs = cloneDeep(initialState).jobs;
    const wrapper = shallow(<JobList jobs={jobs} />);
    // Expect the wrapper object to be defined
    expect(wrapper.find(`[data-test='job-list']`)).toBeDefined();
    expect(wrapper.find(`[data-test='job-item']`)).toHaveLength(jobs.length);
  });

  it("renders a list job", () => {
    const jobs = cloneDeep(initialState).jobs;
    const wrapper = shallow(<JobList jobs={jobs} />);
    // Check if an element in the Component exists
    expect(wrapper.find(`[data-test='job-list']`)).toBeDefined();
    expect(wrapper.find(`[data-test='job-item']`)).toHaveLength(jobs.length);
  });
});

// describe("MyComponent", () => {
//   configure({ adapter: new Adapter() });
//   it('should render correctly in "debug" mode', () => {
//     const wrapper = shallow(<App />);
//     expect(component).toMatchSnapshot();
//   });
// });
