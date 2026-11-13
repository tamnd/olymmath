---
tag: NTGSYSAK8M
kind: problem
type: answer
answer: e-2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=179922
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let the sequence $\left(x_{n}\right)_{n \geq 2}$ be such that $x_{2}=1, x_{n+1}=\frac{n^{2}}{n-1} \cdot x_{n}, n \geq 2$.

If $S_{n}=\sum_{k=2}^{n}\left(1-\frac{1}{k}\right) \cdot \frac{1}{x_{k}}$, calculate $\lim _{n \rightarrow \infty} S_{n}$.
