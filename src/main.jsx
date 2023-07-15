// main.js
import ReactDOM from "react-dom";
import RouterComponent from "./configuration/router";
import { ArticleProvider } from "./context/ArticleContext";
import { QueryClient, QueryClientProvider  } from "react-query";

const queryClient = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <ArticleProvider>
      <RouterComponent />
    </ArticleProvider>
  </QueryClientProvider>,
  document.getElementById("root")
);
