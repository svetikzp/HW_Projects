function isATheLargest(a, b, c) {
  if (a > b && a > c) {
    return true;
  } else {
    return false;
  }
}

function isBTheLargest(a, b, c) {
  if (b > a && b > c) {
    return true;
  } else {
    return false;
  }
}

function isCTheLargest(a, b, c) {
  if (c > a && c > b) {
    return true;
  } else {
    return false;
  }
}

function isABEqual(a, b, c) {
  if (a === b && a > c) {
    return true;
  } else {
    return false;
  }
}

function isBCEqual(a, b, c) {
  if (b === c && b > a) {
    return true;
  } else {
    return false;
  }
}

function isACEqual(a, b, c) {
  if (a === c && a > b) {
    return true;
  } else {
    return false;
  }
}

export function TheLargestNumber(a1, b1, c1) {
  let a = parseFloat(a1);
  let b = parseFloat(b1);
  let c = parseFloat(c1);

  if (isATheLargest(a, b, c)) {
    return "The 1st number is largest and equal: " + a;
  } else if (isBTheLargest(a, b, c)) {
    return "The 2nd number is largest and equal: " + b;
  } else if (isCTheLargest(a, b, c)) {
    return "The 3rd number is largest and equal: " + c;
  } else if (isABEqual(a, b, c)) {
    return "The 1st and 2nd numbers are largest and equal: " + a;
  } else if (isBCEqual(a, b, c)) {
    return "The 2st and 3nd numbers are largest and equal: " + b;
  } else if (isACEqual(a, b, c)) {
    return "The 1st and 3nd numbers are largest and equal: " + c;
  } else {
    return "All three numbers are equal. And equal: " + a;
  }
}

