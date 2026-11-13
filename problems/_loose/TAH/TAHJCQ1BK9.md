---
tag: TAHJCQ1BK9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=167135
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The sequence $x_{n}$ is defined as follows:

$$
\begin{gathered}
x_{1}=5 \\
x_{n+1}=x_{n}^{2}, \text { if } n \geq 1
\end{gathered}
$$

Prove that the last $n$ digits of $x_{n+1}$ and $x_{n}$ are the same.
