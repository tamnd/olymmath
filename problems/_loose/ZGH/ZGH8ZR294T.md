---
tag: ZGH8ZR294T
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=168836
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
András wants to calculate the cube root of a number $A$ by following in Newton's footsteps using the following recursive sequence:

$$
x_{1}=A, x_{n+1}=\frac{x_{n}+\frac{A}{x_{n}^{2}}}{2} .
$$

Is it true that this sequence approximates $\sqrt[3]{A}$ to any desired accuracy?
