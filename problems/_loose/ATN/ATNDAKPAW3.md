---
tag: ATNDAKPAW3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=242890
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Strings $a_1, a_2, ... , a_{2016}$ and $b_1, b_2, ... , b_{2016}$ each contain all natural numbers from $1$ to $2016$ exactly once each (in other words, they are both permutations of the numbers $1, 2, ..., 2016$). Prove that different indices $i$ and $j$ can be found such that $a_ib_i- a_jb_j$ is divisible by $2017$.
