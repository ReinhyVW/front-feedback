import { useState, useEffect } from "react";
import { getFeedback } from './getFeedback.js';

export function useFeedbackTotalizer(date) {
  const [totalFeedbacks, setTotalFeedbacks] = useState(0);
  const [poorFeedbacks, setPoorFeedbacks] = useState([]);

  function calculateTotalFeedbacks(data) {
    let totalFeedbacks = 0;

    data.forEach(item => {
      totalFeedbacks += (item.Excellent || 0) + (item.Good || 0) + (item.Poor || 0);
    });

    return totalFeedbacks;
  }

  function calculatePoorFeedbacksSum(data) {
    let poorSum = 0;

    data.forEach(item => {
      poorSum += item.Poor || 0;
    });

    return poorSum;
  }

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const feedbackData = await getFeedback();
        const feedback = Object.entries(feedbackData.feedback)
          .filter(([key]) => key.startsWith(date))
          .flatMap(([, feedbackArray]) => feedbackArray);

        setTotalFeedbacks(calculateTotalFeedbacks(feedback));

        const poorFeedbacks = feedback.filter(item => item.Poor);
        setPoorFeedbacks(poorFeedbacks);
      } catch (error) {
        console.error('Error fetching feedback:', error);
      }
    };

    fetchFeedback();

  }, [date]);

  const poorSum = calculatePoorFeedbacksSum(poorFeedbacks);

  return [totalFeedbacks, poorSum];
}
