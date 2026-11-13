---
tag: 4FSMBWD557
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263888
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Define the recursive sequence $1, 4, 13, \ldots$ by $s_1 = 1$ and $s_{n+1} = 3s_n + 1$ for all positive integers $n$. The element $s_{18} = 193710244$ ends in two identical digits. Prove that all the elements in the sequence that end in two or more identical digits come in groups of three consecutive elements that have the same number of identical digits at the end.
