import requests
import urllib
import os

base = "http://statistics.data.gov.uk/boundaries/"


with open('POINTS_MASTER.csv') as f:
    code_list = f.read().split()

code_list = list(set(code_list))

for el in code_list:
    url_string = base + el + ".json"
    output_file = os.path.join(os.getcwd(), "geojson", el + ".json")
    print '"' + el+ ".json" + '"' + ","
    #urllib.urlretrieve (url_string, output_file)
