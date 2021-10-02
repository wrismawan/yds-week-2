print("Soal Latihan")
n = int(input("Masukkan jumlah n: "))
db = {}
for i in range(n):
  print("Masukkan nama dan nilai ke " + str(i+1))
  userList = [(n) for n in input().strip('[]').split(' ')]

for j in range(n):
  db[userList[0]] = userList[n]

print(db)