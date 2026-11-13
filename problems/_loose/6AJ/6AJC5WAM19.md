---
tag: 6AJC5WAM19
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=167917
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a_{1}, a_{2}, \ldots$ be the sequence of positive numbers such that for any positive $n$,

$$
a_{1}+a_{2}+\ldots+a_{n}=\frac{1}{a_{n}}
$$

Prove that

$$
\frac{1}{\sqrt{2 n-1}} \leq a_{n} \leq \frac{1}{\sqrt{n}}
$$
