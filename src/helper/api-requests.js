// https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&with_networks=213

const API_KEY = "b1afec16ca29a99de834626942f6d05d";

const apiRequests = {
    getNetflixOriginals: `/discover/tv?api_key=${API_KEY}&language=en-US&page=1&with_networks=213`
}

export default apiRequests;
