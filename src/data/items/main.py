import os
import json

files = ["lentes-cosmeticas.json"]

for i in os.listdir():
    if i.endswith(".json"):
        if not i in files:
            files.append(i)
items = {}

for i in files:
    with open(i,'r') as selection:
        items.update(json.load(selection))

with open('default.json', 'w', encoding='utf-8') as default:
    json.dump(items,default,indent=4)
