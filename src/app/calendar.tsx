export const Calendar = () => {
  const days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((i) => {
    return (
      <div
        key={i}
        style={{
          color: "#f1d0a7",
        }}
      >
        {i}
      </div>
    );
  });
  const spacer = [1, 2, 3].map((i) => {
    return <div key={i + "SPACER"}></div>;
  });
  const dates = Array.from({ length: 30 }, (_, i) => i + 1).map((i) => {
    if (i == 18) {
      return (
        <div key={i} className="text-red rounded-full	border-2 border-red-400	">
          18
        </div>
      );
    } else {
      return <div key={i}>{i}</div>;
    }
  });

  return (
    <div className="grid grid-cols-7 text-white content-center border-2 border-white p-1 rounded-lg">
      {days}
      {spacer}
      {dates}
    </div>
  );
};
