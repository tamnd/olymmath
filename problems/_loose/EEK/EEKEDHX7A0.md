---
tag: EEKEDHX7A0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=209132
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
suppose that $v(x)=\sum_{p\le x,p\in \mathbb P}log(p)$ (here $\mathbb P$ denotes the set of all positive prime numbers). prove that the two statements below are equivalent:

**a)** $v(x) \sim x$ when $x \longrightarrow \infty$

**b)** $\pi (x) \sim \frac{x}{ln(x)}$ when $x \longrightarrow \infty$. (here $\pi (x)$ is number of the prime numbers less than or equal to $x$).
