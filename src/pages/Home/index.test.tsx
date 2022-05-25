import { describe, expect, test } from "vitest";

import { render, fireEvent } from "solid-testing-library";

import Home from "./index";

describe("<TodoList />", () => {
  test("it will render an text input and a button", () => {
    const { getByPlaceholderText, getByText, unmount } = render(() => <Home />);
    expect(getByPlaceholderText("What's your name?")).toBeInTheDocument();
    expect(getByText("Hello world!")).toBeInTheDocument();
    unmount();
  });
});
