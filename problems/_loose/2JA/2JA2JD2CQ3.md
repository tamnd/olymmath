---
tag: 2JA2JD2CQ3
kind: problem
type: answer
answer: k=20t-1,=1,2,\cdotsk=20t+4,=8,9,\cdots
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=110896
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all natural numbers $k$ such that the set
$$
S=\{1994,1997,2000, \cdots, 1994+3 k\}
$$

can be partitioned into the union of two disjoint sets $A$ and $B$, and the sum of all numbers in $A$ is 9 times the sum of all numbers in $B$.
