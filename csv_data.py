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
with open("data/economic_activity.csv", 'rU') as csvfile:
    reader = csv.DictReader(csvfile)
    for row in reader:
        if row['code'] in code_set:
            code_dict[row['code']]['activity'] = float(row['opacity'])

with open("data/income.csv", 'rU') as csvfile:
    reader = csv.DictReader(csvfile)
    for row in reader:
        if row['code'] in code_set:
            code_dict[row['code']]['income_low'] = float(row['income_low'])
            code_dict[row['code']]['income'] = float(row['income'])
            code_dict[row['code']]['income_mid'] = float(row['income_middle'])
            code_dict[row['code']]['income_high'] = float(row['income_high'])

with open("data/ethnicity.csv", 'rU') as csvfile:
    reader = csv.DictReader(csvfile)
    for row in reader:
        if row['code'] in code_set:
            population.append(float(row['population']))
            code_dict[row['code']]['population'] = float(row['population'])

with open("data/gender.csv", 'rU') as csvfile:
    reader = csv.DictReader(csvfile)
    for row in reader:
        if row['code'] in code_set:
            code_dict[row['code']]['male'] = float(row['male_opacity'])
            code_dict[row['code']]['female'] = float(row['female_opacity'])

with open("data/gender.csv", 'rU') as csvfile:
    reader = csv.DictReader(csvfile)
    for row in reader:
        if row['code'] in code_set:
            code_dict[row['code']]['male'] = float(row['male_opacity'])
            code_dict[row['code']]['female'] = float(row['female_opacity'])

with open("data/age.csv", 'rU') as csvfile:
    reader = csv.DictReader(csvfile)
    for row in reader:
        if row['code'] in code_set:
            code_dict[row['code']]['age0to12'] = float(row['age0to12'])
            code_dict[row['code']]['age13to18'] = float(row['age13to18'])
            code_dict[row['code']]['age19to25'] = float(row['age19to25'])
            code_dict[row['code']]['age26to40'] = float(row['age26to40'])
            code_dict[row['code']]['age41to60'] = float(row['age41to60'])
            code_dict[row['code']]['age61to90'] = float(row['age61to90'])

with open("data/ethnicity.csv", 'rU') as csvfile:
    reader = csv.DictReader(csvfile)
    for row in reader:
        if row['code'] in code_set:
            code_dict[row['code']]['white'] = float(row['white_opacity'])
            code_dict[row['code']]['indian'] = float(row['indian_opacity'])
            code_dict[row['code']]['chinese'] = float(row['chinese_opacity'])
            code_dict[row['code']]['black'] = float(row['black_opacity'])


print(json.dumps(code_dict))
