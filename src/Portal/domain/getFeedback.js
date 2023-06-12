import { fetchFeedback } from '../adapters/feedbackService';

export const getFeedback = async () => {
    try {
        const feedback = await fetchFeedback();
        return { feedback };
    } catch (error) {
        console.error(error);
        return { feedback: [] };
    }
};