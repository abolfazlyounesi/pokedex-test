import { ApolloClient, InMemoryCache } from "@apollo/client";

/**
 * Definations basics for apis to make the usage of it easier
 * and keep things separate
 */

export const ApiSettings = {
  // Best Practice for passing the base URL is, getting it from the environment variables
  // but for this example I didnt think its necessary :)
  BaseURL: "https://dex-server.herokuapp.com/"
};

export const client = new ApolloClient({
  uri: ApiSettings.BaseURL,
  cache: new InMemoryCache()
});
