---
tag: FA5TA5A4D9
kind: problem
type: answer
answer: "504"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=179962
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For any non-zero natural number $n$, we denote by $x_{n}$ the number of natural numbers with $n$ digits, divisible by 4, formed using the digits 2, 0, 1, or 6.

a) Calculate $x_{1}, x_{2}, x_{3}$, and $x_{4}$.

b) Find the natural number $n$ such that

$$
1+\left[\frac{x_{2}}{x_{1}}\right]+\left[\frac{x_{3}}{x_{2}}\right]+\left[\frac{x_{4}}{x_{3}}\right]+\ldots+\left[\frac{x_{n+1}}{x_{n}}\right]=2016
$$

where $[a]$ represents the integer part of the real number $a$.
