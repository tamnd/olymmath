---
tag: GK1GWTT5QY
kind: problem
type: answer
answer: a_{n}=\frac{2011\cdot6^{n-1}}{n}+n,\quadn=1,2,\cdots
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=98322
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a sequence of positive terms $\left\{a_{n}\right\}$ satisfies: (1) $a_{1}=2012$; (2) $a_{2}, a_{3}$ are integers; (3) the sequence $\left\{n a_{n}-n^{2}\right\}$ is a geometric sequence with a common ratio no greater than 10. Find the general term formula of the sequence $\left\{a_{n}\right\}$.
