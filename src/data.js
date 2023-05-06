export const floors = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
export const rooms = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
export const timeIntervals = [];

const setTimeIntervals = () => {
  let startHour = 10;

  for (let i = 0; i < 9; i++) {
    let str1 = `${startHour}:00`;
    let str2 = `${startHour}:30`;
    timeIntervals.push(str1 + "-" + str2);
    startHour++;
  }
}

setTimeIntervals();