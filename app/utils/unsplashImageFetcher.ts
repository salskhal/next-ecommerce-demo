// utils/unsplashImageFetcher.js


/**
 * Fetches a random furniture image URL from Unsplash.
 * @param {number} [width=800] - The desired width of the image.
 * @param {number} [height=600] - The desired height of the image.
 * @returns {Promise<string>} A promise that resolves to the image URL.
 */
export async function getRandomFurnitureImageUrl(width: number = 800, height: number = 600): Promise<string> {
  const url = `https://api.unsplash.com/photos/random?query=furniture&orientation=landscape&w=${width}&h=${height}`;

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch image from Unsplash');
    }

    const data = await response.json();
    return data.urls.regular;
  } catch (error) {
    console.error('Error fetching furniture image:', error);
    return 'https://via.placeholder.com/800x600?text=Furniture+Image+Not+Available';
  }
}

// Example usage:
// getRandomFurnitureImageUrl().then(url => console.log(url));