// Function to fetch a random cat image
function fetchCatImage() {
    return new Promise((resolve, reject) => {
      fetch('https://cataas.com/cat')
        .then(response => {
          if (!response.ok) {
            reject(`Error fetching cat image: ${response.status}`);
          } else {
            return response.blob();
          }
        })
        .then(blob => {
          const imageUrl = URL.createObjectURL(blob);
          const img = document.createElement('img');
          img.src = imageUrl;
          const imageContainer = document.getElementById('image-container');
          imageContainer.innerHTML = '';
          imageContainer.appendChild(img);
          resolve();
        })
        .catch(error => {
          reject(`Error fetching cat image: ${error.message}`);
        });
    });
  }
  
  // Event listener for the "Fetch New Image" button
  const fetchBtn = document.getElementById('fetch-btn');
  fetchBtn.addEventListener('click', () => {
    fetchCatImage()
      .catch(error => {
        console.error('Error:', error);
      });
  });
  
  // Fetch the initial cat image when the page loads
  fetchCatImage()
    .catch(error => {
      console.error('Error:', error);
    });