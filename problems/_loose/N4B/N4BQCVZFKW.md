---
tag: N4BQCVZFKW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1987 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h37423
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=35638
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=234159
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/1987
    source: hf-ai-mo-aops
    label: 1987 China Team Selection Test
---
a.) For all positive integer $k$ find the smallest positive integer $f(k)$ such that $5$ sets $s_1,s_2, \ldots , s_5$ exist satisfying:
**i.** each has $k$ elements;**ii.** $s_i$ and $s_{i+1}$ are disjoint for $i=1,2,...,5$ ( $s_6=s_1$ )**iii.** the union of the $5$ sets has exactly $f(k)$ elements.

b.) Generalisation: Consider $n \geq 3$ sets instead of $5$ .
