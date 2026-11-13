---
tag: G7WYK7QF0N
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=223476
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Argentina/train/0001.parquet#row=260
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cono-sur
    source: hf-mathnet
    label: Argentina Cono Sur Mathematical Olympiad
---
A list of $n$ positive integers $a_1, a_2,a_3,\ldots,a_n$ is said to be *good* if it checks simultaneously:
$\bullet a_1<a_2<a_3<\cdots<a_n,$
$\bullet a_1+a_2^2+a_3^3+\cdots+a_n^n\le 2023.$
For each $n\ge 1$, determine how many *good* lists of $n$ numbers exist.
