---
tag: WNPPHWQYPP
kind: problem
type: answer
answer: a_{n}=\frac{\sqrt{6}}{24}[(5+2\sqrt{6})^{n-1}-(5-2\sqrt{6})^{n-1}]
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=137499
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the sequence $\left\{a_{n}\right\}$ satisfies $a_{1}=0, a_{n+1}=5 a_{n}+\sqrt{24 a_{n}^{2}+1}(n \geqslant 1)$, try to find the general term formula of the sequence $\left\{a_{n}\right\}$.
