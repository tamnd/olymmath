---
tag: D8BVTYBC88
kind: problem
type: answer
answer: p(x)=0p(x)=x^{2}+x
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=162786
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all polynomials $p$ with real coefficients for which

$$
p(p(x))=\left(x^{2}+x+1\right) p(x)
$$

for all $x \in \mathbb{R}$.
