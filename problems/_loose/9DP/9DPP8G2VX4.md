---
tag: 9DPP8G2VX4
kind: problem
type: answer
answer: P(x)=0
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=86233
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We fix a natural number $k \geq 1$. Find all polynomials $P(x)$ that satisfy

$$
P\left(x^{k}\right)-P(k x)=x^{k} P(x)
$$

for all values of $x \in \mathbb{R}$.
