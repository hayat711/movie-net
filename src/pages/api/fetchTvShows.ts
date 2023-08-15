
import axios from "axios";

export const fetchTvShows = async () => {
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;
    const baseUrl =process.env.NEXT_PUBLIC_BASE_URL
    const { data } = await axios.get(`${baseUrl}/tv/popular${apiKey}`);
    return data;
}