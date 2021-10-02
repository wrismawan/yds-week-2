fun main() {
  // hallo mufti ramdhani
//   loop input 3x
  for (a in 1..3) {
      println("Masukan Nilai")
      // pisah dengan spasi dan jadikan int
      val nilai = readLine()!!.split(" ").map { it.toInt() }
      // jalankan fungsi rata2 dengan parameter nilai
      cekRata(nilai)
  }
}

// fungsi rata2 dengan nilai default list
fun cekRata(nilai: List<Int>) {

  var result = 0.0
  
  // tambahkan tiap a ke var result
  for (a in nilai) {
      result += a
  }

  // bagi tiga untuk hitung rata2
  println(result / 3)

}

