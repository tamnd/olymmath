---
tag: NAHDCDVR15
kind: problem
type: answer
answer: "1985"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=44735
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the smallest number $ n > 1980 $ such that the number

$$
\frac{x_{1}+x_{2}+x_{3}+\ldots+x_{n}}{5}
$$

is an integer for any assignment of integers $ x_{1}, x_{2}, x_{3}, \ldots, x_{n} $, none of which are divisible by 5.
