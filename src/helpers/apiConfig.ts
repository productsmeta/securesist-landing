
// Pase Url
export const baseUrl = "https://securesist.vercel.app/api/landingPage";

 

export async function apiFetch<T>(
    url: string,
    options: RequestInit = {}
  ): Promise<T> {
    const defaultHeaders: HeadersInit = {
      "Content-Type": "application/json",
    };
  
    // If body is FormData, don't set Content-Type header (browser will set it with boundary)
    const isFormData = options.body instanceof FormData;
    
    const res = await fetch(url, {
      ...options,
      headers: isFormData 
        ? { ...(options.headers || {}) }
        : {
            ...defaultHeaders,
            ...(options.headers || {}),
          },
    });
  
    if (!res.ok) {
      const errorData = await res.json().catch(() => ({ message: `API Error: ${res.status}` }));
      throw new Error(errorData.message || `API Error: ${res.status}`);
    }
  
    return res.json();
  }
  


// Parse Url
export const parseUrl = {
    POST_REQUEST: `${baseUrl}/partner`,
    GET_LOGOS: `${baseUrl}/partner`,
}
export const DemoUrl = {
  POST_REQUEST: `${baseUrl}/demo`,
}

// use in get
//   export default async function Page() {
//     const products = await apiFetch("https://api.example.com/products");
  
//     return <div>{products.length} items</div>;
//   }

// use in post 
// export async function createProduct() {
//   const data = await apiFetch("https://api.example.com/products", {
//     method: "POST",
//     body: JSON.stringify({
//       name: "iPhone",
//       price: 400,
//     }),
//   });

//   return data;
// }