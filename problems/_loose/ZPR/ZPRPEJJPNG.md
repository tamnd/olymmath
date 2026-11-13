---
tag: ZPRPEJJPNG
kind: problem
type: answer
answer: 55n + \binom{n+1}{3}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=243960
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Archipelago consists of $ n$ islands : $ I_1,I_2,...,I_n$ and $ a_1,a_2,...,a_n$ - number of the roads on each island. $ a_1 = 55$, $ a_k = a_{k - 1} + (k - 1)$, ($ k = 2,3,...,n$)
a) Does there exist an island with 2008 roads?
b) Calculate $ a_1 + a_2 + ... + a_n.$
