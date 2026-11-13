---
tag: FWVDMQ72SZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=115203
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$F_{0}, F_{1}, F_{2}$ are Fibonacci sequence, solve: $a_{n}-a_{n-1}=F_{n \cdot 2} F_{n-1}$. (Hint: $\left.F_{n+2} F_{n \cdots 1}=\left(F_{n-1}+F_{n}\right)\left(F_{n+1}-F_{n}\right)=F_{n=1}^{2}-F_{n}^{2}\right)$
