---
tag: TCW1ENQ04X
kind: problem
type: answer
answer: C_{2013} = 3^{2013} - (2014)2^{2013} + \frac{2013 \cdot 2014}{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=253557
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the number of permutations $(a_1, a_2, . . . , a_{2013})$ of $(1, 2, \dots , 2013)$ such that there are exactly two indices $i \in \{1, 2, \dots , 2012\}$ where $a_i < a_{i+1}$.
