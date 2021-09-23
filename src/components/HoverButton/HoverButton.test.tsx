import React from "react";
import { render, fireEvent } from "@testing-library/react";
import HoverButton from './HoverButton'

describe("HoverButton", () => {
  test("is Hover Button Rendered",  () => {
       render(<HoverButton children="test-button"/>)
  });
});