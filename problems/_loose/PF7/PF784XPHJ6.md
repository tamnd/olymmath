---
tag: PF784XPHJ6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=80616
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine all integers $n$ such that, for any $\left(x_{i}\right)_{1 \leqslant i \leqslant n}$ such that $n$ does not divide their sum, there exists $j \in\{1, \ldots, n\}$ such that $n$ does not divide $x_{j}, x_{j}+x_{j+1}, \ldots, x_{j}+\cdots+x_{j+n-1}$ (where the indices are taken modulo $n$).
