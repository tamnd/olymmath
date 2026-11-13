---
tag: 1YENC64GA5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=165730
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $x$ be a positive real number, and $n$ a positive integer. Prove that

$$
\frac{n}{(x+1)(x+2 n)} \leq \frac{1}{x+1}-\frac{1}{x+2}+\frac{1}{x+3}-\frac{1}{x+4}+\ldots+\frac{1}{x+2 n-1}-\frac{1}{x+2 n}<\frac{n}{\left(x+\frac{1}{2}\right)\left(x+2 n+\frac{1}{2}\right)}
$$
