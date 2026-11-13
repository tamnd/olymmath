---
tag: T6XB5MB2RR
kind: problem
type: answer
answer: 2^{N+2}dividesp-1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=81451
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a_{n}$ be the recurrence sequence defined by $a_{0}=2$ and $a_{n+1}=$ $2 a_{n}^{2}-1$. Let $N \geqslant 1$ and $p$ be a prime divisor of $a_{N}$. Suppose there exists an integer $x$ such that $x^{2} \equiv 3(\bmod p)$. Show that $2^{N+2}$ divides $p-1$.
