type Categories = "Work" | "Play" | "Study" | "Exercise" | "Social" | "Self Care";

export interface CardHeaderStyle {
  title: Categories;
  bgColor: string;
  img: string;
}

interface Times {
  current: number;
  previous: number;
}

// export interface CardDetails {
//   title: Categories;
//   timeframes: { [category in UserCardDetails["timeFrame"]]: Times };
// }

export interface CardDetails {
  title: Categories;
  current: number;
  previous: number;
  text: "Yesterday" | "Last Week" | "Last Month";
}

export interface UserCardDetails {
  user: { firstName: string; lastName: string };
  timeFrame: "daily" | "weekly" | "monthly";
  setTimeFrame: (timeframe: UserCardDetails["timeFrame"]) => void;
}
