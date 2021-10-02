<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Quiz Bonus</title>

  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
</head>
<body>
  <div class="container py-5">
    <div class="row">
      <div class="col-lg-12">
        <div class="card">
        <div class="card-header bg-info text-white">
            <h5>Input</h5>
          </div>
          <div class="card-body">
            <form method="POST" action="<?php echo $_SERVER["PHP_SELF"];?>">  
              <label>Masukkan Angka maksimal nilai</label> 
              <input type="text" name="bil" class="form-control">
              <br>
              <label>Masukkan Angka nama dan nilai</label> 
              <input type="text" name="siswa" class="form-control">
              <br>
              <label>Masukkan Nama Siswa yang ingin dicari</label> 
              <input type="text" name="nama" class="form-control">
              <br>
              <input class="btn btn-primary" type="submit" name="submit" value="Submit">  
            </form>
          </div>
        </div>
      </div>
    </div>

    <div class="row mt-4">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-header bg-info text-white">
            <h5>Output</h5>
          </div>
          <div class="card-body">
            <?php
              if ($_SERVER["REQUEST_METHOD"] == "POST") {
                $hasil = "";
                $bil = $_POST["bil"];
                $siswa = $_POST["siswa"];
                $nama = $_POST["nama"];
                $cek_pagar_depan = strpos($siswa,"[");
                $cek_pagar_belakang = strpos($siswa,"]");

                if($cek_pagar_depan !== false || $cek_pagar_belakang !== false){
                  echo "Maaf penulisan format angka tanpa []." ?> 
                  <?php
                }else{
                  $siswa_nilai = explode(" ",$siswa);
                  
                  for($i = 1; $i < count($siswa_nilai); $i++){
                    if($i == count($siswa_nilai)-1){
                      echo "mohon maaf kak";
                      break;
                    }else{
                      if($bil != count($siswa_nilai)){
                        $hasil = "jumlah harus sama";
                        break;
                      }else{
                        echo "berhasil";
                        break;

                      }
                    }
                  }
                }
              }
            ?>
          </div>
        </div>
      </div>
    </div>
  </div>
	<br>


<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns" crossorigin="anonymous"></script>
</body>
</html>