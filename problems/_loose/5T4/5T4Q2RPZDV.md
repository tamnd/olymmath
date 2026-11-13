---
tag: 5T4Q2RPZDV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=241417
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\mathcal{P}_0=A_0A_1\ldots A_{n-1}$ be a convex polygon such that $A_iA_{i+1}=2^{[i/2]}$ for $i=0, 1,\ldots ,n-1$ (where $A_n=A_0$). Define the sequence of polygons $\mathcal{P}_k=A_0^kA_1^k\ldots A_{n-1}^k$ as follows: $A_i^1$ is symmetric to $A_i$ with respect to $A_0$, $A_i^2$ is symmetric to $A_i^1$ with respect to $A_1^1$, $A_i^3$ is symmetric to $A_i^2$ with respect to $A_2^2$ and so on. Find the values of $n$ for which infinitely many polygons $\mathcal{P}_k$ coincide with $\mathcal{P}_0$.
