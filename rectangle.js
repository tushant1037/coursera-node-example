module.exports = (x, y, callback) => {
  if (l <= 0 || b <= 0) {
    setTimeout(
      () =>
        callback(
          new Error(
            "Rectangle dimensions should be greater than zero. l = " +
              l +
              ", and b = " +
              b
          ),
          null
        ),
      2000
    );
  } else {
    setTimeout(
      () =>
        callback(null, {
          perimeter: () => 2 * (x + y),
          area: () => x * y,
        }),
      2000
    );
  }
};

perimeter = (x, y) => 2 * (x + y);
area = (x, y) => x * y;
