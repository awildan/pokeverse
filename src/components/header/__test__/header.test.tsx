// import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Header from "~/components/header";

// describe("Header", () => {

// });

test("renders Header unchanged", () => {
  const { container } = render(<Header />);
  expect(container).toMatchSnapshot();
});
