import { fetchCenters } from "../adapters/centersService.js";

export const getCenters = async () => {
    try {
        const centers = await fetchCenters();
        return { centers };
    } catch (error) {
        console.error(error);
        return { centers: [] };
    }
};