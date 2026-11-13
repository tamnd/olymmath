---
tag: 78JQ1SNSFH
kind: problem
type: answer
answer: 3(n+1)/2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Iran/train/0000.parquet#row=358
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo
    source: hf-mathnet
    label: Iran 41th Iranian Mathematical Olympiad
---
Given an odd positive integer $n$. Determine the smallest positive integer $k$ such that it would be possible to fill all the cells of a $3 \times k$ table with non-negative integers such that

i. The sum of the entries of each column be $n$;

ii. Each of numbers $0, 1, \dots, n$ must appear at least once in each row.
