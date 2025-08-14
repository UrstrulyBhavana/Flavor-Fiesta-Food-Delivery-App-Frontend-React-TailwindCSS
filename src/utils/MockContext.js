import { createContext } from "react";

const MockContext = createContext({
  useMock: false,
  setUseMock: () => {}
});

export default MockContext;
