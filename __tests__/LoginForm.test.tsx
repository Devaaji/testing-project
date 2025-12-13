//__tests__/LoginForm.test.tsx

import { LoginForm } from "@/app/components/LoginForm";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

test("CASE 1: shows error when email is empty", async () => {
  const user = userEvent.setup();

  render(<LoginForm onLogin={jest.fn()} />);

  await user.click(screen.getByRole("button", { name: "Login" }));

  expect(screen.getByRole("alert")).toHaveTextContent("Email is required");
});

test("CASE 2: shows error when API fails", async () => {
  const user = userEvent.setup();
  const mockLogin = jest.fn().mockResolvedValue(false);

  render(<LoginForm onLogin={mockLogin} />);

  await user.type(screen.getByPlaceholderText("Email"), "test@mail.com");
  await user.click(screen.getByRole("button", { name: "Login" }));

  expect(mockLogin).toHaveBeenCalledWith("test@mail.com");
  expect(screen.getByRole("alert")).toHaveTextContent("Login failed");
});

test("CASE 3: does not show error when login succeeds", async () => {
  const user = userEvent.setup();
  const mockLogin = jest.fn().mockResolvedValue(true);

  render(<LoginForm onLogin={mockLogin} />);

  await user.type(screen.getByPlaceholderText("Email"), "user@mail.com");
  await user.click(screen.getByRole("button", { name: "Login" }));

  expect(mockLogin).toHaveBeenCalledWith("user@mail.com");
  expect(screen.queryByRole("alert")).toBeNull();
});

