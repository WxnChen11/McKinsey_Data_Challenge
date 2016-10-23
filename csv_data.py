import csv
import statistics
import json

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
econ_active = []
population = []
with open("data/econ_activity.csv", 'rU') as csvfile:
    reader = csv.DictReader(csvfile)
    for row in reader:
        if row['code'] in code_set:
            econ_active.append(float(row['active']))
            code_dict[row['code']]['activity'] = float(row['active'])

with open("data/income.csv", 'rU') as csvfile:
    reader = csv.DictReader(csvfile)
    for row in reader:
        if row['code'] in code_set:
            income_list.append(float(row['income']))
            code_dict[row['code']]['income'] = float(row['income'])

with open("data/ethnicity.csv", 'rU') as csvfile:
    reader = csv.DictReader(csvfile)
    for row in reader:
        if row['code'] in code_set:
            population.append(float(row['population']))
            code_dict[row['code']]['population'] = float(row['population'])/16342

print(json.dumps(code_dict))


minimum, maximum, std_dev = get_min_max_std(income_list)
#print(minimum, maximum, std_dev)
