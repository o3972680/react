import { get } from 'axios';

/**
 * Get data
 */
export const getPosts = () => {
    return get('http://jsonplaceholder.typicode.com/posts');
}