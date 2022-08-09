import React from "react";

const boardCategories = [
  {
    id: "0",
    topic: "Programming Languages",
    boards: ["0", "1", "2"],
  },
  {
    id: "1",
    topic: "Domains",
    boards: ["3", "4"],
  },
];

const boards = [
  {
    _id: "0",
    topic: "Python",
    description: "Discuss Python programming here",
    threads: ["0", "1", "2"],
    category: {
      id: "0",
      topic: "Programming Languages",
    },
  },
  {
    _id: "1",
    topic: "C",
    description: "The classic we all know and love",
    threads: ["3", "4"],
    category: {
      id: "0",
      topic: "Programming Languages",
    },
  },
  {
    _id: "2",
    topic: "C++",
    description: "We all hate outselves",
    threads: ["5", "6", "7", "8"],
    category: {
      id: "0",
      topic: "Programming Languages",
    },
  },
  {
    _id: "3",
    topic: "Web Development",
    description: "Topics regarding web development",
    threads: ["9", "10", "11", "12"],
    category: {
      id: "1",
      topic: "Domains",
    },
  },
  {
    _id: "4",
    topic: "Operating Systems",
    description: "For discussion about operating systems",
    threads: ["13", "14", "15", "16"],
    category: {
      id: "1",
      topic: "Domains",
    },
  },
];

const HomePage = (): JSX.Element => {
  return <div />;
};

export default HomePage;
