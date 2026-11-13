---
tag: WAKB0SF0A0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=79194
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(USAMO 2012) Let $x_{1}, x_{2}, \ldots, x_{n}$ be such that $\sum_{i} x_{i}=0$ and $\sum_{i} x_{i}^{2}=1$. For any $A \subset \llbracket 1, n \rrbracket$ we set $S_{A}=\sum_{i \in A} x_{i}$. Let also $\lambda>0$.

Show that the number of $A$ such that $S_{A} \geq \lambda$ is at most $\frac{2^{n-3}}{\lambda^{2}}$.
