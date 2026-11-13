---
tag: Y9K0T5CQTN
kind: problem
type: answer
answer: k = 1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Russia/train/0000.parquet#row=222
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian
    source: hf-mathnet
    label: Russia XL Russian mathematical olympiad
---
The numbers $1, 2, \ldots, 10000$ are put in some order into the squares of a checkered $100 \times 100$ board, one number per square. Pete marks the squares according to the following rules. At the beginning, he just marks $k$ squares by his own choice. By any subsequent move, he may mark any unmarked square containing a number $a$, if either (i) its row contains an already marked square with a number smaller than $a$, or (ii) its column contains an already marked square with a number greater than $a$.

Find the least $k$ such that for any arrangement of the numbers Pete is able to mark all the squares of the table. (S. Berlov)
