const API_URL = import.meta.env.VITE_API_URL || '/api/contact';

export const submitContactForm = async (formData) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.email)) {
    throw new Error('Please provide a valid email address.');
  }

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Server error occurred');
    }

    return data;
  } catch (error) {
    console.error('Contact Service Error:', error);
    if (error.message === 'Failed to fetch') {
      throw new Error('Could not connect to the backend server. Please ensure it is running on port 5000.');
    }
    throw error;
  }
};
