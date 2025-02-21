import os
import json

# for i in os.listdir():
#     if i.endswith(".json"):
#         with open(i, "r", encoding='iso8859-1') as file:
#             read = json.load(file)
#             with open(i, "w", encoding="utf-8") as wf:
#                 json.dump(read, wf, indent=4, ensure_ascii=False)

new_files = []
with open("../../urls.json", "r") as urls:
    urls_dict = json.load(urls)
    for i in os.listdir():
        if i.endswith(".json"):
            name = i.split("/")[-1].replace(".json","")
            if name in urls_dict.keys():
                new_files.append(urls_dict[name] + '.json')
                os.rename(i,urls_dict[name] + '.json')

for i in os.listdir():
    if i.endswith(".json"):
        if not i.split("/")[-1] in new_files:
            os.remove(i)

