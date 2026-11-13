---
tag: G3HNBE8SWY
kind: problem
type: answer
answer: a_{n}=\frac{6n-1}{6n+1}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=87543
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The sequence $a_{n}$ is defined recursively as

$$
\begin{aligned}
& a_{0}=-1 \\
& a_{n}=\frac{2 a_{n-1}-3}{3 a_{n-1}-4}, n \in \mathbf{N}
\end{aligned}
$$

Determine the formula for $a_{n}$.
