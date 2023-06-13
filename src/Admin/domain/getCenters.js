import { fetchCenters } from "../adapters/centerService.js";

export const getCenters = async () => {
    try {
        const centers = await fetchCenters();
        return { centers };
    } catch (error) {
        console.error(error);
        return { centers: [] };
    }
};