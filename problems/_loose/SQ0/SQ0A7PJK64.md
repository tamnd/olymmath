---
tag: SQ0A7PJK64
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=67933
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a$ and $b$ be two positive numbers, and $a < b$. Define two sequences of numbers $\left\{a_{n}\right\}$ and $\left\{b_{n}\right\}$ by the formulas:

$$
a_{0}=a, b_{0}=b, a_{n+1}=\frac{2 a_{n} b_{n}}{a_{n}+b_{n}}, b_{n+1}=\frac{a_{n}+b_{n}}{2} (n \geq 0)
$$

a) Prove that both sequences have a common limit.

This limit is called the arithmetic-harmonic mean of the numbers $a$ and $b$.

b) Prove that this limit coincides with the geometric mean of the numbers $a$ and $b$.

c) Let $a=1, b=k$. How is the sequence $\left\{b_{n}\right\}$ related to the sequence $\left\{x_{n}\right\}$ from problem $\underline{61299}$?
