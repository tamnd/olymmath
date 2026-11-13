---
tag: JQAETSC41P
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=124134
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove that the numbers $A_{n}, B_{n}, C_{n}$ are equal, where $A_{n}$ represents the number of different ways to cover a $2 \times n$ rectangle with $1 \times 2$ rectangles, $B_{n}$ represents the number of different sequences of 1s and 2s that sum to $n$, and $C_{n}$ is defined as
$$
C_{n}=\left\{\begin{array}{l}
C_{m}^{0}+C_{m+1}^{2}+C_{m+2}^{4}+\cdots+C_{2 m}^{2 m}, \text { when } n=2 m, \\
C_{m+1}^{1}+C_{m+2}^{3}+C_{m+3}^{5}+\cdots+C_{2 m+1}^{2 m+1}, \text { when } n=2 m+1 .
\end{array}\right.
$$
