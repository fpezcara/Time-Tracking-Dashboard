type Categories = "Work" | "Play" | "Study" | "Exercise" | "Social" | "Self Care";

export interface CardHeaderStyle {
  title: Categories;
  bgColor: string;
  img: string;
}

export interface CardDetails {
  title: Categories;
  current: number;
  previous: number;
}

// interface Timeframes {
//   [key: string]: { current: number; previous: number };
// }
// {
//     "title": "Work",
//     "timeframes": {
//       "daily": {
//         "current": 5,
//         "previous": 7
//       },
//       "weekly": {
//         "current": 32,
//         "previous": 36
//       },
//       "monthly": {
//         "current": 103,
//         "previous": 128
//       }
//     }
//   },
