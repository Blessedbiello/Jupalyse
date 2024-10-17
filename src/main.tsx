import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import DCAsRoute, { loader as DCAsLoader, action as DCAsAction } from "./routes/dcas";
import { MantineProvider, Text } from "@mantine/core";

import "@mantine/core/styles.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Text c="red">Home</Text>,
      },
      {
        path: "/dcas/:address",
        element: <DCAsRoute />,
        loader: DCAsLoader,
        action: DCAsAction,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider defaultColorScheme="dark">
      <RouterProvider router={router} />
    </MantineProvider>
  </React.StrictMode>
);
