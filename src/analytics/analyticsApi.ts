// analyticsApi.ts

// This file contains API calls related to analytics

const API_BASE_URL = 'https://api.example.com/analytics';

// Function to get analytics data
export const getAnalyticsData = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/data`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Failed to fetch analytics data:', error);
        throw error;
    }
};

// Function to send analytics event
export const sendAnalyticsEvent = async (event: string) => {
    try {
        const response = await fetch(`${API_BASE_URL}/event`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ event })
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Failed to send analytics event:', error);
        throw error;
    }
};