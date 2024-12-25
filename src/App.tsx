import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Applayout from "./ui/Applayout";
import Home from "./pages/Home";
import ErrorElement from "./ui/ErrorElement";
import DoctorInfo from "./pages/DoctorInfo";
import SearchPage from "./pages/SearchPage";
import Contact from "./pages/Contact";
import Rules from "./pages/Rules";
import Login from "./pages/Login";
import { Toaster } from "react-hot-toast";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Favorite from "./pages/Favorite";
import Turn from "./pages/Turn";
import UserProvider from "./ui/UserProvider";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

const router = createBrowserRouter([
  {
    element: <Applayout />,
    errorElement: <ErrorElement />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/doctor/:doctorId", element: <DoctorInfo /> },
      { path: "/search/:name", element: <SearchPage /> },
      { path: "/contact-us", element: <Contact /> },
      { path: "/rules", element: <Rules /> },
    ],
  },
  {
    path: "/signup",
    element: (
        <Login />
    ),
  },
  {
    path: "/login",
    element: (
        <Signup />
    ),
  },
  {
    path: "/user",
    element: (
      <UserProvider>
        <Profile />
      </UserProvider>
    ),
  },
  {
    path: "/favorites",
    element: (
      <UserProvider>
        <Favorite />
      </UserProvider>
    ),
  },
  {
    path: "/turns",
    element: (
      <UserProvider>
        <Turn />
      </UserProvider>
    ),
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 1800,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "#4DB6AC",
            color: "#FAFAFA",
          },
        }}
      />
    </QueryClientProvider>
  );
};

export default App;
