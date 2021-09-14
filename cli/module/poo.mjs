/* 27. Program a class called Movie.

The class will receive an object when instantiated with the
following information: id of the film in IMDB, title, director,
year of release, country or countries of origin, genres and rating in
IMBD.

- All the data of the object are obligatory.
- Validate that the IMDB id has 9 characters,
the first 2 are letters and the remaining 7 numbers.
- Validate that the title does not exceed 100 characters.
- Validate that the director does not exceed 50 characters.
- Validate that the release year is a 4-digit whole number.
- Validate that the country or countries are entered in the form of an arrangement.
- Validate that the genres are entered in the form of an arrangement.
- Validate that the genres entered are within the genres
accepted *.
- Create a static method that returns the accepted genres *.
- Validate that the grade is a number between 0 and 10 and can be
one-place decimal.
- Create a method that returns the entire technical sheet of the film.
- From an arrangement with the information of 3 movies generates 3
instances of the class in an automated way and prints the datasheet
of each movie.

Accepted Genres: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary, Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.

*/

class Movie {
  constructor({ id, title, director, year, countries, genres, rate }) {
    this.id = id;
    this.title = title;
    this.director = director;
    this.year = year;
    this.countries = countries;
    this.genres = genres;
    this.rate = rate;

    this.idValidation(id);
    this.titleValidation(title);
    this.directorValidation(director);
    this.yearValidation(year);
    this.countriesValidation(countries);
    this.genresValidation(genres);
    this.rateValidation(rate);
  }

  //* Feedback methods

  static get genresList() {
    return [
      'Action',
      'Adult',
      'Adventure',
      'Animation',
      'Biography',
      'Comedy',
      'Crime',
      'Documentary',
      'Drama',
      'Family',
      'Fantasy',
      'Film Noir',
      'Game-Show',
      'History',
      'Horror',
      'Musical',
      'Music',
      'Mystery',
      'News',
      'Reality-TV',
      'Romance',
      'Sci-Fi',
      'Short',
      'Sport',
      'Talk-Show',
      'Thriller',
      'War',
      'Western',
    ];
  }

  static validGenres() {
    return console.info(`Valid genres: ${Movie.genresList.join(', ')}`);
  }

  get info() {
    return console.info(
      `\n- MOVIE INFORMATION - \n \n ID: ${this.id} \n Title: ${
        this.title
      } \n Director: ${this.director} \n Year: ${this.year} \n Countries: ${
        this.countries
      } \n Genres: ${this.genres.join(', ')} \n Rate: ${this.rate} \n \n`
    );
  }

  //* General validations

  stringValidation(str) {
    if (!str) return false;
    if (str === undefined || null) return false;
    if (typeof str !== 'string') return false;
    if (str === '') return false;
    if (isNaN(str) === false) return false;
    return true;
  }

  numberValidation(num) {
    if (!num) return false;
    if (num === undefined || null) return false;
    if (typeof num !== 'number') return false;
    if (Math.sign(num) !== 1) return false;
    return true;
  }

  arrayElementsValidation(arr, type) {
    for (const el in arr) {
      if (typeof arr[el] !== `${type}`) {
        return false;
      }
    }
    return true;
  }

  arrayValidation(arr, type) {
    if (!arr) return false;
    if (arr === undefined || arr === null) return false;
    if (!Array.isArray(arr)) return false;
    if (!this.arrayElementsValidation(arr, type)) return false;
    return true;
  }

  patternValidation(str, pattern) {
    if (!pattern.test(str)) return false;
    return true;
  }

  //* Parameters validation

  idValidation(str) {
    const pattern = /^[a-z]{2}\d{7}$/;
    return !this.stringValidation(str)
      ? console.error(`The id must be a valid string!`)
      : !this.patternValidation(str, pattern)
      ? console.error(
          `The id must contain 9 digits (2 lower letters[d] and 7 positive numbers[n]) with this format: {ddnnnnnnn}!`
        )
      : true;
  }

  titleValidation(str) {
    return !this.stringValidation(str)
      ? console.error(`The title must be a valid string!`)
      : str.length > 100
      ? console.error(
          `The title length must be equal or less than 100 characters!`
        )
      : true;
  }

  directorValidation(str) {
    return !this.stringValidation(str)
      ? console.error(`The director must be a valid string!`)
      : str.length > 50
      ? console.error(
          `The director length must be equal or less than 50 characters!`
        )
      : true;
  }

  yearValidation(num) {
    const pattern = /^\d{4}/;
    return !this.numberValidation(num)
      ? console.error(`The year must be a valid year!`)
      : num.toString().length !== 4
      ? console.error(
          `The year must be a number and contain 4 digits (numbers)!`
        )
      : !this.patternValidation(num, pattern)
      ? console.error(
          `The year must be a number and contain 4 digits (numbers)!`
        )
      : true;
  }

  countriesValidation(arr) {
    return !this.arrayValidation(arr, 'string')
      ? console.error(
          `The countries must be a valid list of countries (string array)!`
        )
      : true;
  }

  genresValidation(arr) {
    if (!this.arrayValidation(arr, 'string')) {
      return console.error(
        `The genres must be an string array of valid genres!`
      );
    }
    const validGenres = Movie.genresList;
    for (const el in arr) {
      if (!validGenres.includes(arr[el]))
        return console.error(
          `The genres must be an string array of valid genres!`
        );
    }
  }

  rateValidation(num) {
    const pattern = /^\d{1}\.\d{1}$||^\d{1}$/;
    return !this.numberValidation(num)
      ? console.error(`The rate must be a valid positive number!`)
      : num > 10
      ? console.error(
          'The rate must be a positive number integer or decimal (n / n.n) with equal or less value than 10!'
        )
      : !this.patternValidation(num, pattern)
      ? console.error(
          `The rate must be a positive number integer or decimal (n / n.n) with equal or less value than 10!`
        )
      : true;
  }
}

let movies = [
  {
    id: 'tt0086250',
    title: 'Scarface',
    director: 'Brian De Palma',
    year: 1983,
    countries: ['EUA'],
    genres: ['Crime', 'Drama'],
    rate: 8.3,
  },
  {
    id: 'tt0068646',
    title: 'The Godfather',
    director: 'Francis Ford Coppola',
    year: 1972,
    countries: ['EUA'],
    genres: ['Crime', 'Drama'],
    rate: 9.2,
  },
  {
    id: 'tt4323594',
    title: `I'm No Longer Here`,
    director: 'Fernando Frias',
    year: 2019,
    countries: ['México', 'EUA'],
    genres: ['Drama'],
    rate: 7.3,
  },
];

//movies.forEach((el) => new Movie(el).info);
export const dataCall = () => {
  return `${Object.keys(movies).length} movies cached!`;
};
