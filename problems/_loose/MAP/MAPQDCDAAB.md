---
tag: MAPQDCDAAB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=261535
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $T$ be a $2015 \times 2015$ array containing the integers $1, 2, 3, ... , 2015^2$ satisfying the property that $T_{i,a }> T_{i,b}$ for all $a > b$ and $T_{c,j} > T_{d,j}$ for all $c > d$ where $1 \le a, b, c, d \le 2015$ and $T_{i,j}$ represents the entry in the $i$-th row and $j$-th column of $T$. How many possible values are there for the entry at $T_{5,5}$?
