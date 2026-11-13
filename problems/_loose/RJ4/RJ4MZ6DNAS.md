---
tag: RJ4MZ6DNAS
kind: problem
type: answer
answer: E
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Netherlands/train/0001.parquet#row=202
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We are looking at numbers for which two adjacent digits always add up to the digit immediately to their right (if it exists). So two adjacent digits when added together are always smaller than $10$, except possibly the last two digits. Furthermore, the first digit cannot be $0$. An example of such a number is $1347$, because $1+3=4$ and $3+4=7$. How many such five-digit numbers do there exist?
A) 1
B) 2
C) 3
D) 5
E) 8
