def count_avg(arr):
    return sum(arr)/3

# meminta input jumlah siswa
inp = int(input())

temp_dict = {}

# meminta input nama dan nilai
for i in range(inp) :
    val = input()
    temp_arr = val.split()
    temp_dict[temp_arr[0]] = temp_arr[1:]

# meminta input yang ingin dicari oleh user
query_name = input()

res_arr = []
for i in temp_dict[query_name]:
    res_arr.append(float(i))

# menghitung rata-rata
result = count_avg(res_arr)

# output desimal
print('{:.2f}'.format(result))
