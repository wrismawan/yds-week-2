fun main() {
    for (a in 1..3) {
        println("Masukan Nilai")
        val nilai1 = readLine()!!.split(" ").map { it.toFloat() }
        kumpulanNilai(nilai1)
    }

}

fun kumpulanNilai(nilai1: List<Float>) {
    val yumna = nilai1
    val ai = nilai1
    val wahyu = nilai1

    var result = 0.0

    for (a in wahyu) {
        result += a
    }

    println(result / 3)

}


