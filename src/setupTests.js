// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
import {
  ensureMocksReset,
  installMockStorage,
  matchMedia,
} from "@shopify/jest-dom-mocks";

installMockStorage();

beforeEach(() => {
  matchMedia.mock();
});

afterEach(() => {
  matchMedia.restore();
  ensureMocksReset();
});
