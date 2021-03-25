export function isLastMonth(month) {
  if (Number(month) === 11) {
    return true;
  }
  return false;
}

export function isFirstMonth(month) {
  if (Number(month) === 0) {
    return true;
  }
  return false;
}
