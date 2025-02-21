import os
import shutil

items = [
    "P12",
    "On Design",
    "Adventure",
    "Ana Hickmann",
    "Armani Exchange",
    "Arnette",
    "Bulget",
    "Emporio Armani",
    "Harley Davidson",
    "HB",
    "Kipling",
    "Michael Kors",
    "Nike",
    "Ray Ban",
    "Speedo",
    "Victor Hugo",
    "Vogue",
    "Baratinhos",
    ]


for i in items:
    item = i.replace(" ","")
    # with open("oslo.jsx", "r") as oslo:
    #     with open("./" + item + "/index.jsx","w") as new_item:
    #         new_item.write(oslo.read().replace("Oslo", item))
    with open("Banner.jsx", "r") as banner:
        with open("./" + item + "/Banner/index.jsx", "w") as new_banner:
            new_banner.write(banner.read())
