---
tag: Y1EVYNABS7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=178542
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a natural number greater than or equal to 2. Consider two matrices $A, B \in M_{n}(\mathbb{R})$, such that $A$ is invertible and $3 A B=2 B A+I_{n}$.

a) Determine the matrix $B$, given that $n=2$ and $A=\left(\begin{array}{ll}0 & 1 \\ 1 & 0\end{array}\right)$.

b) Prove that $\operatorname{det}\left(I_{n}-A B\right)=\operatorname{det}\left(I_{n}-B A\right)$.

c) Show that $\operatorname{det}(A B-B A)=0$.
