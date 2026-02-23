// Pase Url
export const baseUrl = process.env.NEXT_PUBLIC_API_URL || "https://api.securesist.com/landingPage";

export async function apiFetch<T>(
    url: string,
    options: RequestInit = {}
  ): Promise<T> {
    const defaultHeaders: HeadersInit = {
      "Content-Type": "application/json",
    };
  
    // If body is FormData, don't set Content-Type header (browser will set it with boundary)
    const isFormData = options.body instanceof FormData;
    
    try {
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
        let errorData: any;
        try {
          errorData = await res.json();
        } catch {
          errorData = { message: `API Error: ${res.status}` };
        }
        
        // Handle different error response formats:
        // 1. Direct error object with msg: { msg: "Invalid company size value", path: "companySize" }
        // 2. Error object with message: { message: "Error message" }
        // 3. Error array: [{ msg: "Error 1" }, { msg: "Error 2" }]
        // 4. Nested errors: { errors: [{ msg: "Error" }] }
        
        let errorMessage = `API Error: ${res.status}`;
        
        if (errorData.msg) {
          // Direct msg field
          errorMessage = errorData.msg;
        } else if (errorData.message) {
          // Direct message field
          errorMessage = errorData.message;
        } else if (Array.isArray(errorData) && errorData.length > 0) {
          // Array of errors - take first error's msg
          errorMessage = errorData[0].msg || errorData[0].message || errorMessage;
        } else if (errorData.errors && Array.isArray(errorData.errors) && errorData.errors.length > 0) {
          // Nested errors array
          errorMessage = errorData.errors[0].msg || errorData.errors[0].message || errorMessage;
        }
        
        throw new Error(errorMessage);
      }
    
      return res.json();
    } catch (error) {
      // Handle network errors
      if (error instanceof TypeError && error.message === "Failed to fetch") {
        throw new Error(
          `Network error: Unable to connect to the server. Please check your internet connection and try again. (URL: ${url})`
        );
      }
      // Re-throw other errors
      throw error;
    }
  }
  


// Parse Url
export const parseUrl = {
    POST_REQUEST: `${baseUrl}/partner`,
    GET_LOGOS: `${baseUrl}/partner`,
}
export const DemoUrl = {
  POST_REQUEST: `${baseUrl}/demo`,
}


export const BlogsUrl = {
  GET_ALL_BLOGS: `${baseUrl}/blog`,
  GET_BLOG_BY_SLUG: (slug: string) => `${baseUrl}/blog/${slug}`, 
}

export const LandingPageUrl = {
  GET_HOME_PAGE: `${baseUrl}/homePage`,
  GET_KEY_ABOUT_US_PAGE: `${baseUrl}/aboutusPage`,
  GET_KEY_SOLUTIONS_PAGE: `${baseUrl}/solutionsPage`,

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