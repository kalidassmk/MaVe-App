// athleteApi.ts

// Define a function to fetch all athletes
export const fetchAthletes = async () => {
    const response = await fetch('/api/athletes');
    if (!response.ok) {
        throw new Error('Failed to fetch athletes');
    }
    return response.json();
};

// Define a function to fetch an athlete by ID
export const fetchAthleteById = async (id: number) => {
    const response = await fetch(`/api/athletes/${id}`);
    if (!response.ok) {
        throw new Error('Failed to fetch athlete');
    }
    return response.json();
};

// Define a function to create a new athlete
export const createAthlete = async (athleteData: object) => {
    const response = await fetch('/api/athletes', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(athleteData),
    });
    if (!response.ok) {
        throw new Error('Failed to create athlete');
    }
    return response.json();
};

// Define a function to update an athlete
export const updateAthlete = async (id: number, athleteData: object) => {
    const response = await fetch(`/api/athletes/${id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(athleteData),
    });
    if (!response.ok) {
        throw new Error('Failed to update athlete');
    }
    return response.json();
};

// Define a function to delete an athlete
export const deleteAthlete = async (id: number) => {
    const response = await fetch(`/api/athletes/${id}`, {
        method: 'DELETE',
    });
    if (!response.ok) {
        throw new Error('Failed to delete athlete');
    }
};
