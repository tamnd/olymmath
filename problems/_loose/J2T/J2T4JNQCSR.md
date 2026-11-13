---
tag: J2T4JNQCSR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=77365
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A sequence $\left(u_{n}\right)_{n \geqslant 1}$ is said to be Sicilian if $u_{1}$ is a strictly positive integer, and for all $n$,

$$
u_{n+1}= \begin{cases}u_{n} / 2 & \text { if } u_{n} \text { is even, and } \\ u_{n}+\left[\sqrt{u_{n}}\right] & \text { if } u_{n} \text { is odd. }\end{cases}
$$

Does there exist a Sicilian sequence $\left(u_{n}\right)_{n \geqslant 1}$ such that $u_{n}>1$ for all $n$?

(N.B. $[x]$ denotes the integer part of $x$. For example, $[2.71828]=2$.)
