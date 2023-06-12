import { useEffect, useState } from "react";
import { getFeedback } from "./getFeedback";

export function useFeedbackFilter(date) {
    const [filteredFeedback, setFilteredFeedback] = useState([]);
    const [centerFeedbackSummary, setCenterFeedbackSummary] = useState({});
    const [reasonSummary, setReasonSummary] = useState({});

    useEffect(() => {
        const fetchFeedback = async () => {
            try {
                const feedbackData = await getFeedback();
                const feedback = feedbackData["feedback"][date];

                setFilteredFeedback(feedback);

                // Calculate feedback summary by center
                const centerSummary = feedback.reduce((summary, item) => {
                    const { Center, Excellent, Good, Poor } = item;

                    if (!summary[Center]) {
                        summary[Center] = 0;
                    }

                    summary[Center] += Excellent + Good + Poor;

                    return summary;
                }, {});

                setCenterFeedbackSummary(centerSummary);


                // Calculate reason summary
                const reasonSummary = feedback.reduce((summary, item) => {
                    const { excellentReason, goodReason, poorReason } = item;

                    Object.entries(excellentReason).forEach(([reason, count]) => {
                        summary[reason] = (summary[reason] || 0) + count;
                    });

                    Object.entries(goodReason).forEach(([reason, count]) => {
                        summary[reason] = (summary[reason] || 0) + count;
                    });

                    Object.entries(poorReason).forEach(([reason, count]) => {
                        summary[reason] = (summary[reason] || 0) + count;
                    });

                    return summary;
                }, {});

                const sortedSummary = Object.fromEntries(
                    Object.entries(reasonSummary).sort((a, b) => b[1] - a[1])
                );

                setReasonSummary(sortedSummary);

            } catch (error) {
                console.error("Error fetching feedback: ", error);
            }
        };

        fetchFeedback();
    }, [date]);

    return { filteredFeedback, centerFeedbackSummary, reasonSummary };
}