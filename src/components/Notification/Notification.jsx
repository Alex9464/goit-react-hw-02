const Notification = ({ show }) => {
  if (!show) return null;

  return (
    <div>
      <p>No feedback yet. Please leave a review!</p>
    </div>
  );
};

export default Notification;