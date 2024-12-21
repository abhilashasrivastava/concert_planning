const axiosInstance = require("./lib/axios");
require("dotenv").config();

// Test the health endpoint
axiosInstance
    .get("/health")
    .then((response) => console.log(response.data))
    .catch((error) => console.log("Error fetching the axios health", error));

// Function to fetch concerts by artist and city
const getConcertsByArtistAndCity = async (artist, city) => {
    try {
        const response = await axiosInstance.get("/concerts/search", {
            params: {
                artist: artist,
                city: city,
            },
        });

        return response.data;
    } catch (error) {
        console.log("Error fetching concerts", error);
    }
};

// Example call to getConcertsByArtistAndCity
getConcertsByArtistAndCity("Taylor Swift", "Las Vegas")
    .then((concerts) => console.log("Concerts data", concerts))
    .catch((error) => {
        console.log(error);
    });
