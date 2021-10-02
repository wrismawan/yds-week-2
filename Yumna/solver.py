def count_avg(arr):
    return sum(arr)/3

inp = int(input())

temp_dict = {}

for i in range(inp) :
    val = input()
    temp_arr = val.split()
    temp_dict[temp_arr[0]] = temp_arr[1:]

query_name = input()

res_arr = []
for i in temp_dict[query_name]:
    res_arr.append(float(i))

result = count_avg(res_arr)

print('{:.2f}'.format(result))