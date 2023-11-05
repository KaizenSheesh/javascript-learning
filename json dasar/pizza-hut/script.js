function tampilSemuaData() {
  $.getJSON("pizza.json", function (data) {
    let menu = data.menu;
    $.each(menu, function (i, data) {
      $("#daftar-menu").append(
        '<div class="card mb-3" style="width: 18rem"><img src="img/' +
          data.gambar +
          '" class="card-img-top" alt="' +
          data.gambar +
          '" /><div class="card-body"><h5 class="card-title">' +
          data.nama +
          '</h5><p class="card-text">' +
          data.deskripsi +
          '</p><h5 class="card-title">Rp. ' +
          data.harga +
          "</h5></div></div>"
      );
    });
  });
}

tampilSemuaData();

$(".nav-link").on("click", function () {
  $(".nav-link").removeClass("active");
  $(this).addClass("active");

  let kategori = $(this).html();
  $("h1").html(kategori);

  if (kategori == "All Menu") {
    $("#daftar-menu").html("");
    tampilSemuaData();
  }

  $.getJSON("pizza.json", function (data) {
    let menu = data.menu;
    let content = "";

    $.each(menu, function (i, data) {
      if (data.kategori == kategori.toLowerCase()) {
        content +=
          '<div class="card mb-3" style="width: 18rem"><img src="img/' +
          data.gambar +
          '" class="card-img-top" alt="' +
          data.gambar +
          '" /><div class="card-body"><h5 class="card-title">' +
          data.nama +
          '</h5><p class="card-text">' +
          data.deskripsi +
          '</p><h5 class="card-title">Rp. ' +
          data.harga +
          "</h5></div></div>";
      }
    });
    $("#daftar-menu").html(content);
  });
});
