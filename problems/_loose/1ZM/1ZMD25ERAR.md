---
tag: 1ZMD25ERAR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=110538
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The ternary tuple $\left(x_{n}, y_{n}, z_{n}\right), n \in \mathbf{N}$ is determined by the following relations: $x_{1}=2, y_{1}=4, z_{1}=\frac{6}{7}$, $x_{n-1}=\frac{2 x_{n}}{x_{n}{ }^{2}-1}, y_{n+1}=\frac{2 y_{n}}{y_{n}{ }^{2}-1}, z_{n+1}=\frac{2 z_{n}}{z_{n}{ }^{2}-1}$.
(1) Prove that the process of generating ternary tuples can continue indefinitely;
(2) Can there be a step where the ternary tuple $\left(x_{n}, y_{n}, z_{n}\right)$ satisfies the equation $x_{n}+y_{n}+z_{n}=0$?
