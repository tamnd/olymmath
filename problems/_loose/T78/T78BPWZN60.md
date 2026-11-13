---
tag: T78BPWZN60
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=75534
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Czech_Republic/train/0000.parquet#row=89
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cz-sk-mo
    source: hf-mathnet
    label: Czech Republic Czech and Slovak Mathematical Olympiad
---
Let $a, b$ be given, mutually prime natural numbers. The sequence $\left(x_{n}\right)_{n=1}^{\infty}$ of natural numbers is constructed such that for every $n>1$ it holds that $x_{n}=a x_{n-1}+b$. Prove that in any such sequence, every term $x_{n}$ with index $n>1$ divides infinitely many of its subsequent terms. Does this statement hold for $n=1$?
