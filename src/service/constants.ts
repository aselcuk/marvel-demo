export const API_BASE = 'https://gateway.marvel.com/v1/public';
export const API_CHARACTERS_LIMIT = 30;
export const API_CHARACTER_COMICS_LIMIT = 100;

export const SLICE_COMICS_LIMIT = 10;

export const timestamp = new Date().getTime();

export const MARVEL_PRIVATE_KEY = process.env.REACT_APP_MARVEL_PRIVATE_KEY;
export const MARVEL_PUBLIC_KEY = process.env.REACT_APP_MARVEL_PUBLIC_KEY;