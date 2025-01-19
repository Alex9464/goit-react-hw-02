const Feedback = ({ feedbacks, totalFeedback }) => {
  const positiveFeedback = totalFeedback 
    ? Math.round(((feedbacks.good + feedbacks.neutral) / totalFeedback) * 100)
    : 0;

  return (
    <div>
      <h2>Feedback Statistics</h2>
      <p>Good: {feedbacks.good}</p>
      <p>Neutral: {feedbacks.neutral}</p>
      <p>Bad: {feedbacks.bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive Feedback: {positiveFeedback}%</p>
    </div>
  );
};

export default Feedback;