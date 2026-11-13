---
tag: 3DBVYK7HZE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=245095
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Starting from the number $ 1$ we write down a sequence of numbers where the next number in the sequence is obtained from the previous one either by doubling it, or by rearranging its digits (not allowing the first digit of the rearranged number to be $0$). For instance we might begin:
$$1, 2, 4, 8, 16, 61, 122, 212, 424,...$$
Is it possible to construct such a sequence that ends with the number $1,000,000,000$? Is it possible to construct one that ends with the number $9,876,543,210$?
