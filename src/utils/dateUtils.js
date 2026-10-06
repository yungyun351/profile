// src/utils/dateUtils.js

export function calculateDuration(startDateStr, endDateStr) {
  const start = new Date(startDateStr);
  const end = endDateStr ? new Date(endDateStr) : new Date();

  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }

  if (end.getDate() >= start.getDate()) {
    months++;
  }

  if (months === 12) {
    years++;
    months = 0;
  }

  let result = "";
  if (years > 0) result += `${years}年`;
  if (months > 0 || years === 0) result += `${months}個月`;

  return result;
}