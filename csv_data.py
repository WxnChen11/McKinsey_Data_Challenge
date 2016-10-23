import csv
import statistics

def get_min_max_std(lst):
    minimum = min(lst)
    maximum = max(lst)
    std_dev = statistics.stdev(lst)
    return minimum, maximum, std_dev

with open('POINTS_MASTER.csv') as f:
    code_list = f.read().split()

code_set = set(code_list)

code_dict = {}
for el in code_set:
    code_dict[el] = {}
income_list = []
with open("data/income.csv", 'rU') as csvfile:
    reader = csv.DictReader(csvfile)
    for row in reader:
        if row['code'] in code_set:
            income_list.append(float(row['income']))
            code_dict[row['code']]['income'] = row['income']

minimum, maximum, std_dev = get_min_max_std(income_list)
print(minimum, maximum, std_dev)
