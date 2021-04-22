export const URL_TO_DB = 'https://jsonplaceholder.typicode.com/posts?_limit=10';
export const URL_TO_DB_WITH_PARAMS = (num: number) => `http://jsonplaceholder.typicode.com/posts?_start=${num}&_limit=10`;
export const URL_TO_COMMENTS = 'https://jsonplaceholder.typicode.com/comments?_limit=10'