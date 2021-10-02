# contoh
# Komen dari Adhitya Febhiakbar
# Sabtu, 2 Oktober 2021

# Challenge
print("PROGRAM PYTHON UNTUK MENGHITUNG NILAI RATA-RATA")

n = int(input("\nBanyaknya Data dari daftar siswa: "))

# Nilai Siswa
print()
data = []
jum = 0

for i in range(0, n):
    temp = int(input("Masukkan data ke-%d: " % (i+1)))
    data.append(temp)
    jum += data[i]
    rata2 = jum / n

print("\nRata-rata  = %0.2f" % rata2)
