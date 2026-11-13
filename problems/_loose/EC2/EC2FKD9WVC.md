---
tag: EC2FKD9WVC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=145484
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a real number $a_{1}$, let the sequence $a_{1}, a_{2}, \cdots$ satisfy
$$
a_{n+1}=\left\{\begin{array}{ll}
\frac{1}{2}\left(a_{n}-\frac{1}{a_{n}}\right), & \text { when } a_{n} \neq 0, \\
0, & \text { when } a_{n}=0 .
\end{array}\right.
$$

Prove: This sequence contains infinitely many non-positive terms.
