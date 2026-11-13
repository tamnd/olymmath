---
tag: V4SKW86G3W
kind: problem
type: answer
answer: \frac{13}{23}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=261666
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $c$ denote the largest possible real number such that there exists a nonconstant polynomial $P$ with $$P(z^2)=P(z-c)P(z+c)$$ for all $z$. Compute the sum of all values of $P(\tfrac13)$ over all nonconstant polynomials $P$ satisfying the above constraint for this $c$.
