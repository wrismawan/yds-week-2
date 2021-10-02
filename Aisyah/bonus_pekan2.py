# dikerjakan menggunakan Pythongit
# test aisyah
# melihat jumlah n yang dimasukkan
def varn(a):
    if a < 2:
        print("Jumlah siswa minimal 2")
    elif a > 10:
        print("Jumlah siswa maksimal 9")
    else:
        proses2 = inputnilai(a)

# membuat fungsi input jumlah yang ingin dimasukkan
def inputnilai(b):
    class_list = dict()
    for i in range (b):
        data = input('Masukkan nama & nilai dipisahkan dengan tanda ":" ')
        temp = data.split(':')
        class_list[temp[0]] = int(temp[1])
    print(class_list)

n = int(input("Jumlah siswa yang ingin dimasukkan nilainya: "))
proses1 = varn(n)
