import axios from "axios";
 
export const getImages = async (searchTerm = 'Anime') =>
    await axios.get(`https://api.pexels.com/v1/search?query=${searchTerm}`, {
        headers:{
            Authorization:'563492ad6f917000010000015e40b5273c8f489b87d3a83a2269b998'
        }
    });