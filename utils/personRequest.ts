const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

const peopleRequests = {
  fetchPopular: `https://api.themoviedb.org/3/person/popular?api_key=1d5139264ab93b8da598164a2621d59b&language=en-US&page=1`,
};

export default peopleRequests;
