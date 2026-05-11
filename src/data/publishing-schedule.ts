export type PublishType = 'letter' | 'issue';

export type PublishEvent = {
  date: string; // YYYY-MM-DD
  type: PublishType;
  title?: string;
};

// 第四季排程
// 杂志通信：每周日，从 5/17 起（轻量内容）
// 正刊：暂定每两周一次，从 5/31 起（待小象确认频率后修改）
export const schedule: PublishEvent[] = [
  { date: '2026-05-17', type: 'letter', title: '杂志通信 #1' },
  { date: '2026-05-24', type: 'letter', title: '杂志通信 #2' },
  { date: '2026-05-31', type: 'letter', title: '杂志通信 #3' },
  { date: '2026-05-31', type: 'issue',  title: '正刊 #1' },
  { date: '2026-06-07', type: 'letter', title: '杂志通信 #4' },
  { date: '2026-06-14', type: 'letter', title: '杂志通信 #5' },
  { date: '2026-06-14', type: 'issue',  title: '正刊 #2' },
  { date: '2026-06-21', type: 'letter', title: '杂志通信 #6' },
  { date: '2026-06-28', type: 'letter', title: '杂志通信 #7' },
];
