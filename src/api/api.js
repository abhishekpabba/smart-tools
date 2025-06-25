
// Dummy API Integration Example

export const fetchExampleData = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('API fetch error:', error);
    return null;
  }
};
