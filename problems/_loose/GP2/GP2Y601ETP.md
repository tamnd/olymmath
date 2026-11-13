---
tag: GP2Y601ETP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=130721
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given that $A$ is a finite set of positive real numbers, and for any positive number $a$, the sets $\{x \in A \mid x>a\}$ and $\left\{x \in A \left\lvert x<\frac{1}{a}\right.\right\}$ have the same parity in the number of elements. Prove: $\prod_{x \in A} x=1$.
