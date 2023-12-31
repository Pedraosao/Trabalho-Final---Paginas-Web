<script>
    // Insira sua chave de API do YouTube aqui
    const API_KEY = 'AIzaSyBRabtgZYgxYif1Xj5mznGKt_mNoFTYWLs';

    function search() {
      const query = document.getElementById('searchInput').value;
      const url = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&q=${query}&part=snippet&type=video`;

      fetch(url)
        .then(response => {
          if (!response.ok) {
            throw new Error('Erro na resposta da requisição');
          }
          return response.json();
        })
        .then(data => displayResults(data.items))
        .catch(error => console.error('Erro:', error));
    }

    function displayResults(videos) {
      const resultsContainer = document.getElementById('results');
      resultsContainer.innerHTML = '';

      videos.forEach(video => {
        const videoDiv = document.createElement('div');
        videoDiv.innerHTML = `
          <h2>${video.snippet.title}</h2>
          <p>${video.snippet.description}</p>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/${video.id.videoId}" frameborder="0" allowfullscreen></iframe>
        `;
        resultsContainer.appendChild(videoDiv);
      });
    }
  </script>
</body>
</html>
