const Feedback = ({ feedbacks, totalFeedback, positiveFeedback }) => {
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