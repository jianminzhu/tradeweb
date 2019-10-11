import csv
csv_reader=csv.reader(open('../test_data/nasdaq_15min_fenxing.csv' ))
for row in csv_reader:
    print(row) 