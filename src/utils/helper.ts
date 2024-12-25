export const persianDay = (dayNumber: number) => {
  switch (dayNumber) {
    case 1:
      return "شنبه";
    case 2:
      return "یکشنبه";
    case 3:
      return "دوشنبه";
    case 4:
      return "سه شنبه";
    case 5:
      return "چهارشنبه";
    case 6:
      return "پنجشنبه";
    case 7:
      return "جمعه";
  }
};
export const dayNumber = (name: string) => {
  switch (name) {
    case "شنبه":
      return 6;
    case "یکشنبه":
      return 0;
    case "دوشنبه":
      return 1;
    case "سه شنبه":
      return 2;
    case "چهارشنبه":
      return 3;
    case "پنجشنبه":
      return 4;
    case "جمعه":
      return 5;
  }
};

export const persianNumberDay = (dayNumber: number) => {
  switch (dayNumber) {
    case 0:
      return 2;
    case 1:
      return 3;
    case 2:
      return 4;
    case 3:
      return 5;
    case 4:
      return 6;
    case 5:
      return 7;
    case 6:
      return 1;
  }
};

export const persianLeftDays = (days: string[] = []) => {
  const now = new Date();
  const day = persianNumberDay(now.getDay()) as number;
  const hours = now.getHours();
  

  if (!day) return null;
  const daysLeft: string[] = [];
  for (let i: number = day; i <= 7; i++) {
    if (i === day && hours >= 1 && hours <= 9)
      daysLeft.push(persianDay(i) as string);
    if (i !== day) daysLeft.push(persianDay(i) as string);
  }

  const Days = days.filter((day) => daysLeft.includes(day));
  

  return Days;
};
