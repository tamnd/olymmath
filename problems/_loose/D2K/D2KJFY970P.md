---
tag: D2KJFY970P
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Iran MO (2nd  Round)
    url: https://artofproblemsolving.com/community/c6h3074024
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=784
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo-r2/2023
    source: hf-ai-mo-aops
    label: 2023 Iran MO (2nd  Round)
---
We have a $n \times n$ board. We color the unit square $(i,j)$ black if $i=j$ , red if $i<j$ and green if $i>j$ . Let $a_{i,j}$ be the color of the unit square $(i,j)$ . In each move we switch two rows and write down the $n$ -tuple $(a_{1,1},a_{2,2},\cdots,a_{n,n})$ . How many $n$ -tuples can we obtain by repeating this process? (note that the order of the numbers are important)
