---
tag: B1P6KVY8JA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=84801
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider the sequence $\left(a_{n}\right)$ defined by $a_{1}=1$ and for $n \geqslant 1$:

$$
\begin{aligned}
& a_{2 n}=a_{n}+1 \\
& a_{2 n+1}=\frac{1}{a_{2 n}}
\end{aligned}
$$

Show that all positive rational numbers appear exactly once in this sequence.
