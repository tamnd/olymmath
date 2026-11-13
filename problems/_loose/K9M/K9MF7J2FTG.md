---
tag: K9MF7J2FTG
kind: problem
type: answer
answer: "2020"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=179621
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0002.parquet#row=429
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-nmo
    source: hf-mathnet
    label: Romania 70th ROMANIAN MATHEMATICAL OLYMPIAD
---
For each natural number $n \geq 2$, we denote by $s(n)$ the number of pairs $(x, y)$ of natural numbers, chosen from $1,2, \ldots, n$, with $x>y$, such that $x$ and $y$ have exactly $x-y$ common divisors.

a) Does there exist $n$ such that $s(n)=2019$?

b) Does there exist $n$ such that $s(n)=2020$?

Justify your answers.
