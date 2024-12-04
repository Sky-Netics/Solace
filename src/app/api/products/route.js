export async function GET() {
    try {
      const response = await fetch(`http://ecommerce.soroushsalari.com/store/products`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-publishable-api-key": "your-api-key-here",
        },
      });
  
      if (!response.ok) {
        return new Response(JSON.stringify({ error: 'Failed to fetch data' }), { status: 500 });
      }
  
      const data = await response.json();
      return new Response(JSON.stringify(data), { status: 200 });
    } catch (error) {
      return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
  }
  