const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

const tvRequests = {
  fetchPopular: `https://api.themoviedb.org/3/tv/popular?api_key=1d5139264ab93b8da598164a2621d59b&language=en-US&page=1`,
  fetchTopRated: `https://api.themoviedb.org/3/tv/top_rated?api_key=1d5139264ab93b8da598164a2621d59b&language=en-US&page=1`,
  fetchOnTheAir: `https://api.themoviedb.org/3/tv/on_the_air?api_key=1d5139264ab93b8da598164a2621d59b&language=en-US&page=1`,
};

export default tvRequests;