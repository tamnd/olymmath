---
tag: DERE56ET1H
kind: problem
type: answer
answer: p_{1}=0.05;p_{3}=0.20
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=32986
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A discrete random variable $X$ has the following distribution:

| $X$ | 3 | 4 | 5 | 6 | 7 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| $P$ | $p_{1}$ | 0.15 | $p_{3}$ | 0.25 | 0.35 |

Find the probabilities $p_{1}=P(X=3)$ and $p_{3}=P(X=5)$, given that $p_{3}$ is 4 times $p_{1}$.
