import csv
import json

# [
#     {
#         "Group": "Low Income",
#         "Year": 1999,
#         "Share": 11.9
#     }
# ]

def format(group, year, share):
    return {"Group": group, "Year": year, "Share": share}

arranged_data = []
index_to_year = {}

with open('women_in_gov.csv', 'rt') as f:
    reader = csv.reader(f)
    row_ind = 0
    for row in reader:
        if row_ind == 0:
            for col in range(1, len(row) - 1):
                index_to_year[col] = int(row[col])
        else:
            group = row[0]
            for col in range(1, len(row) - 1):
                year = index_to_year[row_ind]
                if row[col] == "":
                    share = None
                else:
                    share = float(row[col])
                arranged_data.append(format(group, year, share))
        row_ind += 1

with open('women_in_gov_clean.json', "w") as outfile:
    json.dump(arranged_data, outfile)
