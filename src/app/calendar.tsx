export const Calendar = () => {
  const days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((i) => {
    return (
      <div
        key={i}
        className="text-center font-bold"
        style={{
          color: "#f1d0a7",
          textShadow: "2px 2px 4px #000000",
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
        <div
          key={i}
          className="rounded-full border-2 text-center animate-pulse"
          style={{
            borderImage: "radial-gradient(red 69%, #0000 70%) 84.5%/50%",
            clipPath: "polygon(-41% 0, 50% 91%, 141% 0)",
          }}
        >
          18
        </div>
      );
    } else {
      return (
        <div
          key={i}
          className="text-center"
          style={{
            width: "30px",
            height: "30px",
          }}
        >
          {i}
        </div>
      );
    }
  });

  return (
    <div className="grid grid-cols-7 text-white content-center p-1 rounded-2xl bg-kuning bg-opacity-60 px-2">
      {days}
      {spacer}
      {dates}
    </div>
  );
};
