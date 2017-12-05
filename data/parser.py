import csv
# [
#     [Year, Low Income, Lower Middle Income, Upper Middle Income, High Income],
#     [1998, 11.69237909, 7.780776386, 14.57033282, 16.43385411],
#     [1999, 11.06176166, 8.032046118, 14.72949398, 17.43285157]
# ]

def join_all(arr_of_arrs):
    joined = [];
    for arr in arr_of_arrs:
        joined.append(",".join(arr))
    return "\n".join(joined)

arranged_data = [['Year', 'Low Income', 'Lower Middle Income', 'Upper Middle Income', 'High Income']]

with open('women_in_gov.csv', 'rt') as f:
    reader = csv.reader(f)
    for arr in reader:
        if arr[0] == "Country Name":
            for el in range(1, len(arr) - 1):
                arranged_data.append([arr[el]])
        else:
            for el in range(1, len(arr) - 1):
                if arr[el] == "":
                    arranged_data[el].append("")
                else:
                    arranged_data[el].append(arr[el])
    end_data = join_all(arranged_data)

with open('women_in_gov_clean.csv', "w") as outfile:
    outfile.write(end_data)
