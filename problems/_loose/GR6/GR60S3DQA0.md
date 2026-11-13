---
tag: GR60S3DQA0
kind: problem
type: answer
answer: \in[\frac{3}{4},+\infty)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=123853
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(This question is worth 16 points) The sequence $\left\{a_{n}\right\}$ satisfies $a_{1}=3$, and for any positive integers $m, n$, it holds that $a_{m+n}=a_{m}+a_{n}+2 m n$
(1) Find the general term formula for $\left\{a_{n}\right\}$;
(2) If there exists a real number $c$ such that $\sum_{i=1}^{k} \frac{1}{a_{i}}<c$ for all positive integers $k$, determine the range of values for $c$.
