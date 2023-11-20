export interface typeGender {
  name: string;
  value: string;
}

export interface typeSerieTypes {
  name: string;
  value: string;
}

export interface typeSerieStatus {
  name: string;
  value: string;
}

export const listGenders: typeGender[] = [
  {
    name: "Shonen",
    value: "shonen",
  },
  {
    name: "Shojo",
    value: "shojo",
  },
  {
    name: "Seinen",
    value: "seinen",
  },
  {
    name: "Josei",
    value: "josei",
  },
  {
    name: "Action",
    value: "action",
  },
  {
    name: "Adventure",
    value: "adventure",
  },
  {
    name: "Comedy",
    value: "comedy",
  },
  {
    name: "Drama",
    value: "drama",
  },
  {
    name: "Fantasy",
    value: "fantasy",
  },
  {
    name: "Horror",
    value: "horror",
  },
  {
    name: "Mystery",
    value: "mystery",
  },
  {
    name: "Psychological",
    value: "psychological",
  },
  {
    name: "Romance",
    value: "romance",
  },
  {
    name: "Sci-Fi",
    value: "sci-fi",
  },
  {
    name: "Slice of Life",
    value: "slice-of-life",
  },
  {
    name: "Sports",
    value: "sports",
  },
  {
    name: "Supernatural",
    value: "supernatural",
  },
  {
    name: "Historical",
    value: "historical",
  },
  {
    name: "Martial Arts",
    value: "martial-arts",
  },
  {
    name: "School",
    value: "school",
  },
  {
    name: "Harem",
    value: "harem",
  },
  {
    name: "Ecchi",
    value: "ecchi",
  },
  {
    name: "Music",
    value: "music",
  },
  {
    name: "Mecha",
    value: "mecha",
  },
  {
    name: "Super Power",
    value: "super-power",
  },
  {
    name: "Vampire",
    value: "vampire",
  },
  {
    name: "Gore",
    value: "gore",
  },
  {
    name: "Thriller",
    value: "thriller",
  },
  {
    name: "Webtoons",
    value: "webtoons",
  },
];

export const listTypes: typeSerieTypes[] = [
  {
    name: "Novela",
    value: "novela",
  },
  {
    name: "Manga",
    value: "manga",
  },
  {
    name: "Manhwa",
    value: "manhwa",
  },
  {
    name: "Manhua",
    value: "manhua",
  },
];

export const listStatus: typeSerieStatus[] = [
  {
    name: "Hiatus",
    value: "hiatus",
  },
  {
    name: "Pausado",
    value: "pausado",
  },
  {
    name: "Completo",
    value: "completo",
  },
  {
    name: "Emision",
    value: "emision",
  },
];
