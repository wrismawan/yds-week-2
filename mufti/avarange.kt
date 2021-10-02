fun main() {
  for (a in 1..3) {
      println("Masukan Nilai")
      val nilai = readLine()!!.split(" ").map { it.toInt() }
      cekRata(nilai)
  }
}

fun cekRata(nilai: List<Int>) {

  var result = 0.0

  for (a in nilai) {
      result += a
  }

  println(result / 3)

}