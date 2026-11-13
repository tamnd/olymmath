---
tag: GTQ44X1AD7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=167175
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let's find a function $f(x)$ such that the value of $f(x-1)$ at $x-1$ and the value of $f(1-x)$ at $1-x$ satisfy the following relationship for all $x$:

$$
a \cdot f(x-1) + b \cdot f(1-x) = c \cdot x
$$

where $a, b, c$ are given numbers.
