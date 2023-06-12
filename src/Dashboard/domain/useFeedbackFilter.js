import { useEffect, useState } from 'react';
import { getFeedback } from './getFeedback';

export function useFeedbackFilter(date, center) {
  const [filteredFeedback, setFilteredFeedback] = useState([]);
  const [totalFeedbacks, setTotalFeedbacks] = useState([]);

  let totals = {
    "Center": center,
    "Excellent": 0,
    "Good": 0,
    "Poor": 0,
    "excellentReason": {},
    "goodReason": {},
    "poorReason": {}
  };

  function calculateTotalFeedbacks(data) {
    let totalFeedbacks = 0;
  
    data.forEach(item => {
      totalFeedbacks += (item.Excellent || 0) + (item.Good || 0) + (item.Poor || 0);
    });
  
    return totalFeedbacks;
  }

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const feedbackData = await getFeedback();
        const feedback = Object.entries(feedbackData.feedback)
          .filter(([key]) => key.startsWith(date))
          .flatMap(([, feedbackArray]) => feedbackArray);

          setTotalFeedbacks(calculateTotalFeedbacks(feedback))

        if (center !== undefined) {
          const centerFeedback = feedback.filter(item => item.Center === center);
          centerFeedback.forEach((item) => {
            totals.Excellent += item.Excellent;
            totals.Good += item.Good;
            totals.Poor += item.Poor;

            // Iterate over the excellentReason object properties
            for (const key in item.excellentReason) {
              if (totals.excellentReason.hasOwnProperty(key)) {
                totals.excellentReason[key] += item.excellentReason[key];
              } else {
                totals.excellentReason[key] = item.excellentReason[key];
              }
            }

            // Iterate over the goodReason object properties
            for (const key in item.goodReason) {
              if (totals.goodReason.hasOwnProperty(key)) {
                totals.goodReason[key] += item.goodReason[key];
              } else {
                totals.goodReason[key] = item.goodReason[key];
              }
            }

            // Iterate over the poorReason object properties
            for (const key in item.poorReason) {
              if (totals.poorReason.hasOwnProperty(key)) {
                totals.poorReason[key] += item.poorReason[key];
              } else {
                totals.poorReason[key] = item.poorReason[key];
              }
            }
          });
          setFilteredFeedback(totals);
        } else {
          setFilteredFeedback(feedback);
        }
      } catch (error) {
        console.error('Error fetching feedback:', error);
      }
    };

    // Initial fetch
    fetchFeedback();

    // Fetch data every 10 seconds
    const interval = window.location.pathname.endsWith("detail")
    ? setInterval(fetchFeedback, 10000000) // Use an appropriate interval duration for your needs
    : setInterval(fetchFeedback, 10000); // Use an appropriate interval duration for your needs
  

    // Clean up the interval on component unmount
    return () => {
      clearInterval(interval);
    };
  }, [date, center]);

  return {
    filteredFeedback,
    totalFeedbacks
  };
}

export function useFeedbackFilterYear(date, center) {
  const [filteredFeedback, setFilteredFeedback] = useState([]);
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const feedbackData = await getFeedback();
        const feedback = Object.entries(feedbackData.feedback)
          .filter(([key]) => key.startsWith(date))
          .flatMap(([date, feedbackArray]) =>
            feedbackArray.map(feedbackObj => ({ date, ...feedbackObj }))
          );


        if (center !== undefined) {
          const centerFeedback = feedback.filter(item => item.Center === center);
          const feedbackByMonth = centerFeedback.reduce((result, feedback) => {
            const month = feedback.date.slice(0, 7); // Extraer el año y mes (por ejemplo, '2023/01')
            if (!result[month]) {
              result[month] = [];
            }
            result[month].push(feedback);
            return result;
          }, {});

          const feedbackArrayByMonth = Object.entries(feedbackByMonth).map(([month, feedbackArray]) => {
            const date = new Date(month);
            const monthName = capitalizeFirstLetter(date.toLocaleString('default', { month: 'long' }));
            return {
              month: monthName,
              feedback: feedbackArray
            };
          });

          const totalsByMonth = feedbackArrayByMonth.map(({ month, feedback }) => {
            const totalExcellent = feedback.reduce((sum, { Excellent }) => sum + Excellent, 0);
            const totalGood = feedback.reduce((sum, { Good }) => sum + Good, 0);
            const totalPoor = feedback.reduce((sum, { Poor }) => sum + Poor, 0);

            return {
              month,
              totalExcellent,
              totalGood,
              totalPoor
            };
          });

          setFilteredFeedback(totalsByMonth);
        } else {
          setFilteredFeedback(feedback);
        }
      } catch (error) {
        console.error('Error fetching feedback:', error);
      }
    };

    // Initial fetch
    fetchFeedback();

    // Fetch data every 10 seconds
    const interval = setInterval(fetchFeedback, 10000);

    // Clean up the interval on component unmount
    return () => {
      clearInterval(interval);
    };
  }, [date, center]);

  return {
    filteredFeedback
  };
}