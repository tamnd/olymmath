---
tag: ZCA9VC5NT1
kind: problem
type: answer
answer: P(x) = ax + b
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=250576
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all polynomials $P$ with real coefficients such that for all $x, y ,z \in R$,
$$P(x)+P(y)+P(z)+P(x+y+z)=P(x+y)+P(y+z)+P(z+x)$$
