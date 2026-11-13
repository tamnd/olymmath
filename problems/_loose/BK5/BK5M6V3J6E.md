---
tag: BK5M6V3J6E
kind: problem
type: answer
answer: \frac{x}{y^2 + z} + \frac{y}{z^2 + x} + \frac{z}{x^2 + y} \geq \frac{9}{4}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=251169
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $x,y,z$ be positive numbers with the sum $1$. Prove that
$$\frac x{y^2+z}+\frac y{z^2+x}+\frac z{x^2+y}\ge\frac94.$$
