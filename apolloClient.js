import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api-us-east-1.hygraph.com/v2/clcgqa0hr0na101tdbkea6e47/master",
  cache: new InMemoryCache(),
});

export default client;
