import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingScreen, LoginScreen, NotFoundScreen } from "../screens";
import { useAppSelector } from "../state/hooks";

export default function AppRouter() {
  const user = useAppSelector((state) => state.users.currentUser);

  return (
    <BrowserRouter>
      <Routes>
        <Route>
          {user ? (
            <Route path="/" element={<LandingScreen />} />
          ) : (
            <Route path="/" element={<LoginScreen />} />
          )}
          <Route path="*" element={<NotFoundScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
