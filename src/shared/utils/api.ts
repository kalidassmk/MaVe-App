// src/shared/utils/api.ts

// Base API configuration and utilities

import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.example.com/', // TODO: replace with actual base URL
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
});

export const get = (url: string, config = {}) => api.get(url, config);
export const post = (url: string, data: any, config = {}) => api.post(url, data, config);
export const put = (url: string, data: any, config = {}) => api.put(url, data, config);
export const del = (url: string, config = {}) => api.delete(url, config);
