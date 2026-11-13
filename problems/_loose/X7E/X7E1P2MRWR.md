---
tag: X7E1P2MRWR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=111122
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The sequences $\left\{x_{n}\right\}$ and $\left\{y_{n}\right\}$ are defined as follows:
$$
\begin{array}{l}
x_{0}=1, x_{1}=1, x_{n+1}=x_{n}+2 x_{n-1} ; \\
y_{0}=1, y_{1}=7, y_{n+1}=2 y_{n}+3 y_{n-1} .
\end{array}
$$

Prove: The two sequences have only the common term 1.
