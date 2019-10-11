import csv
csv_reader=csv.reader(open('files/nasdaq_15min_fenxing.csv',encoding='utf-8'))
for row in csv_reader:
    print(row)
#taxi.csv最好放在同一目录下