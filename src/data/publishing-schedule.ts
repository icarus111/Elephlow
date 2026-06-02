export type PublishType = 'letter' | 'issue';

export type PublishEvent = {
  date: string; // YYYY-MM-DD
  type: PublishType;
  title?: string;
};

const formatDate = (year: number, month: number, day: number) =>
  `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;

// 每月前三个周四发布杂志通信，最后一个周四发布正刊。
export const getScheduleForMonth = (year: number, month: number): PublishEvent[] => {
  const thursdays: number[] = [];
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  for (let day = 1; day <= daysInMonth; day++) {
    if (new Date(year, month, day).getDay() === 4) thursdays.push(day);
  }

  const letters: PublishEvent[] = thursdays.slice(0, 3).map((day, index) => ({
    date: formatDate(year, month, day),
    type: 'letter',
    title: `杂志通信 #${index + 1}`,
  }));
  const issueDay = thursdays.at(-1);

  return issueDay
    ? [...letters, { date: formatDate(year, month, issueDay), type: 'issue', title: '正刊' }]
    : letters;
};
