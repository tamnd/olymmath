---
tag: T4PFWW5C4R
kind: problem
type: answer
answer: "31"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=221470
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\omega_1, \omega_2, \omega_3, \ldots, \omega_{2020!}$ be the distinct roots of $x^{2020!} - 1$. Suppose that $n$ is the largest integer such that $2^n$ divides the value $$\sum_{k=1}^{2020!} \frac{2^{2019!}-1}{\omega_{k}^{2020}+2}.$$ Then $n$ can be written as $a! + b$, where $a$ and $b$ are positive integers, and $a$ is as large as possible. Find the remainder when $a+b$ is divided by $1000$.

*Proposed by vsamc*
