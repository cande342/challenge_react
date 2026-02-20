const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function fetchAPI<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const url = `${BASE_URL}${endpoint}`;
  
  const response = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
  });

  if (!response.ok) {
    throw new Error(`[API ERROR] Status: ${response.status}`);
  }

  return response.json() as Promise<T>;
}