---
tag: 9H7GV4ED4K
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=28416
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let the sequence be defined as follows:

$$
\begin{gathered}
u_{1}=2 ; u_{2}=3 ; u_{n}=3 u_{n-1}-2 u_{n-2} \\
\text { for } n>2
\end{gathered}
$$

Prove that the formula $u_{n}=2^{n-1}+1$ holds.
