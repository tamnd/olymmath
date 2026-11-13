---
tag: Y8SRA4BF4B
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=128598
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The sequence $\left\{x_{n}\right\}_{n \geqslant 1}$ is defined as follows:
$$
x_{1}=1, x_{2 n}=1+x_{n}, x_{2 n+1}=\frac{1}{x_{2 n}} .
$$

Prove that for each positive rational number $r$, there exists a unique $n$ such that $r=x_{n}$.
