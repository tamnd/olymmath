---
tag: E6NZ1SWXY6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=251014
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0000.parquet#row=196
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
How many permutations $(s_1, s_2,...,s_n) $of $(1,2 ,...,n)$ are there satisfying the condition $s_i > s_j$ for all $i \ge j + 3$ when $n = 5$ and when $n = 7$?
