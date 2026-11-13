---
tag: P78V9DBKEX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=84552
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Starting from an $n$-tuple $\left(x_{1}, \ldots, x_{n}\right)$, the following operations are performed:

- Choose two numbers from the $n$-tuple, say $x$ and $y$;
- Replace $x$ with $\frac{x+y}{\sqrt{2}}$ and $y$ with $\frac{x-y}{\sqrt{2}}$, leaving the other numbers unchanged.

Is it possible to transform the quadruplet $\left(2, \sqrt{2}, \frac{1}{\sqrt{2}},-\sqrt{2}\right)$ into $\left(1,2 \sqrt{2}, 1-\sqrt{2}, \frac{\sqrt{2}}{2}\right)$?
