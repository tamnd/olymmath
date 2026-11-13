---
tag: S4WDRNCSEG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=162442
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The sequence of functions $P_{n}$ satisfies the following relations:

$$
\begin{gathered}
P_{1}(x)=x, P_{2}(x)=x^{3} \\
P_{n+1}(x)=\frac{P_{n}^{3}(x)-P_{n-1}(x)}{1+P_{n}(x) P_{n-1}(x)}, n=2,3, \ldots
\end{gathered}
$$

Prove that all functions $P_{n}$ are polynomials.
