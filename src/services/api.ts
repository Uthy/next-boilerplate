const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function fetchData<T>(endpoint: string): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${endpoint}`);
  if (!response.ok) {
    throw new Error('Network response error');
  }
  return response.json();
}