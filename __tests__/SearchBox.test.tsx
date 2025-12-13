// /__tests__/SearchBox.test.tsx
import { SearchBox } from "@/app/components/SearchBox";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

test("NORMAL: user can type & click search", async () => {
  const user = userEvent.setup();       // simulate real user
  const mockFn = jest.fn();             // fake callback to check result

  render(<SearchBox onSearch={mockFn} />);   // render component

  const input = screen.getByPlaceholderText("Search..."); // get input box
  const button = screen.getByRole("button", { name: "Search" }); // get button

  await user.type(input, "banana");     // user types "banana"
  await user.click(button);             // user clicks search

  expect(mockFn).toHaveBeenCalledWith("banana"); // handler gets correct value
});
