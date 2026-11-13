---
tag: E34VEPZ8VE
kind: problem
type: answer
answer: a_{n}=90n-31
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=132209
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a sequence of positive integers $\left\{a_{n}\right\}$ satisfying: $a_{2}, a_{3}$ are prime numbers, and for any positive integers $m, n(m<n)$, we have $a_{m+n}=a_{m}+a_{n}+31, \frac{3 n-1}{3 m-1}<\frac{a_{n}}{a_{m}}<\frac{5 n-2}{5 m-2}$. Find the general term formula of $\left\{a_{n}\right\}$.
