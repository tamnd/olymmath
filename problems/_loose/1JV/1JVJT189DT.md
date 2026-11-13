---
tag: 1JVJT189DT
kind: problem
type: answer
answer: "130"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=154467
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A sequence $\left\{a_{n}\right\}_{n \geq 1}$ of positive integers satisfies the recurrence relation $a_{n+1}=n\left\lfloor a_{n} / n\right\rfloor+1$ for all integers $n \geq 1$. If $a_{4}=34$, find the sum of all the possible values of $a_{1}$.
