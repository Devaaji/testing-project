// __tests__/UserProfile.test.tsx
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "@/app/store/userSlice"; 
import { UserProfile } from "@/app/components/UserProfile";

function renderWithStore(ui: React.ReactNode) {
  const store = configureStore({
    reducer: {
      user: userReducer,
    },
  });

  return render(
    <Provider store={store}>
      {ui}
    </Provider>
  );
}

test("COMPLEX: loads user profile from global state", async () => {
  const user = userEvent.setup();

  renderWithStore(<UserProfile />);

  await user.click(
    screen.getByRole("button", { name: "Load Profile" })
  );

  // loading state
  expect(screen.getByText("Loading...")).toBeInTheDocument();

  // final UI from global state
  expect(await screen.findByText("John")).toBeInTheDocument();
});

