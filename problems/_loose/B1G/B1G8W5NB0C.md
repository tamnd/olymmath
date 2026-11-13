---
tag: B1G8W5NB0C
kind: problem
type: answer
answer: P(x) = \pm (10^k x + c)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204891
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all polynomials $P$ with integer coefficients such that $$s(x)=s(y) \implies s(|P(x)|)=s(|P(y)|).$$
for all $x,y\in \mathbb{N}$.
Note: $s(x)$ denotes the sum of digits of $x$.

*Proposed by Şevket Onur YILMAZ*
