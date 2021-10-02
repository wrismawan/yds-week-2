if __name__ == '__main__':
    
    # meminta input jumlah siswa
    n = int(input())

    # menyimpan nama dan nilai dari setiap siswa
    student_marks = {}
    for _ in range(n):
        name, *line = input().split()
        scores = list(map(float, line))
        student_marks[name] = scores
    
    # meminta input nama siswa yang ingin dihitung rata2nya
    query_name = input()
    
    # menjumlahkan nilai siswa
    sum = 0
    for score in student_marks[query_name]:
        sum += score
    
    # mengeluarkan nilai rata2
    percentage = sum/len(student_marks[query_name])
    print("{:.2f}".format(percentage))

    #mau coba test aja
