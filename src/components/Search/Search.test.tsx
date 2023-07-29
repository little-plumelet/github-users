import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { SearchUserBar } from "./SearchUserBar";
import '@testing-library/jest-dom';

jest.mock("./styles", () => ({
  StyledSearchForm: "form",
  StyledSearchInput: "input",
  StyledSearchButton: "button",
}));

const setValueMock = jest.fn();
const setSearchValueMock = jest.fn();

describe("SearchUserBar", () => {
  test("renders correctly", () => {
    const { getByPlaceholderText, getByText } = render(
      <SearchUserBar
        value=""
        setValue={setValueMock}
        setSearchValue={setSearchValueMock}
      />
    );

    const inputElement = getByPlaceholderText("write user login");
    const buttonElement = getByText("Search");

    expect(inputElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

  test("setSearchValue is called on button click", () => {
    const { getByText } = render(
      <SearchUserBar
        value="testUser"
        setValue={setValueMock}
        setSearchValue={setSearchValueMock}
      />
    );
    const buttonElement = getByText("Search");

    fireEvent.click(buttonElement);

    expect(setSearchValueMock).toHaveBeenCalledWith("testUser");
  });

  test("setValue is called on input change", () => {
    const { getByPlaceholderText } = render(
      <SearchUserBar value="testUser" setValue={setValueMock}
      setSearchValue={setSearchValueMock} />
    );
    const inputElement = getByPlaceholderText("write user login");

    fireEvent.change(inputElement, { target: { value: "newTestUser" } });

    expect(setValueMock).toHaveBeenCalledWith("newTestUser");
  });
});
