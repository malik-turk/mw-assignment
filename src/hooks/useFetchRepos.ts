import { useState } from "react";
import { Octokit } from "octokit";

/**
 * Fetch repos data based on given query
 */
const useFetchRepos = () => {
  const [data, setData] = useState<any>([]);

  const octokit = new Octokit({
    auth: process.env.GHP_TOKEN,
  });

  const fetchRepos = async (query: string) => {
    await octokit
      .request("GET /search/repositories", {
        q: query,
      })
      .then(({ data }) => setData(data));
  };

  return {
    fetchRepos,
    data
  };
};

export default useFetchRepos;
