function searchMovie() {
  $.ajax({
    url: "https://www.omdbapi.com/",
    type: "get",
    dataType: "json",
    data: {
      apikey: "cf765012", // Ganti dengan kunci API yang valid
      s: $("#input-cari").val(),
    },
    success: function (result) {
      if (result.Response == "True") {
        let movie = result.Search;
        let daftarMovie = $("#daftar-movie");
        // Menghapus konten sebelumnya
        daftarMovie.html("");

        daftarMovie.append(
          '<h5 class="text-center">Hasil Pencarian : ' +
            $("#input-cari").val() +
            "</h5>"
        );
        $.each(movie, function (i, data) {
          daftarMovie.append(
            `
                <div class="card" style="width: 18rem">
                <img src="` +
              data.Poster +
              `" class="card-img-top" alt="` +
              data.Title +
              `" />
                <div class="card-body">
                    <h5 class="card-title">` +
              data.Title +
              `</h5>
                    <p class="card-text">
                    Tahun Produksi : ` +
              data.Year +
              `
                    </p>
                    <a href="#" class="card-link see-detail" data-bs-toggle="modal" data-bs-target="#exampleModal" data-id="` +
              data.imdbID +
              `">See Detail</a>
                </div>
                </div>
                `
          );
        });

        $("#input-cari").val("");
      } else {
        $("#daftar-movie").html(
          `
                <h1 class="text-center">` +
            result.Error +
            `</h1>
            `
        );
      }
    },
  });
}
$("#button-cari").on("click", function () {
  searchMovie();
});

$("#input-cari").on("keyup", function (event) {
  if (event.keyCode == 13) {
    searchMovie();
  }
});

$("#daftar-movie").on("click", ".see-detail", function () {
  $.ajax({
    url: "https://www.omdbapi.com/",
    type: "GET",
    dataType: "json",
    data: {
      apiKey: "cf765012",
      i: $(this).data("id"),
    },
    success: function (movie) {
      if (movie.Response === "True") {
        $(".modal-body").html(
          `
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-4">
                    <img src="` +
            movie.Poster +
            `" class="img-fluid" alt="` +
            movie.Title +
            `" />
                    </div>

                    <div class="col-md-8">
                    <ul class="list-group">
                    <li class="list-group-item">` +
            movie.Title +
            `</li>
                    <li class="list-group-item">` +
            movie.Released +
            `</li>
                    <li class="list-group-item">` +
            movie.Genre +
            `</li>
                    <li class="list-group-item">` +
            movie.Director +
            `</li>
                    <li class="list-group-item">` +
            movie.Actors +
            `</li>
                    <li class="list-group-item">` +
            movie.Runtime +
            `</li>
                    <li class="list-group-item">` +
            movie.Plot +
            `</li>
                    </ul>
                    </div>
                </div>
            </div>
        `
        );
      }
    },
  });
});
