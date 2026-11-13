---
tag: 3RJSFKPN73
kind: problem
type: answer
answer: P(n) = n
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=213963
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Denote by $d(n)$ be the biggest prime divisor of $|n|>1$. Find all polynomials with integer coefficients satisfy;
$$P(n+d(n))=n+d(P(n)) $$
for the all $|n|>1$ integers such that $P(n)>1$ and $d(P(n))$ can be defined.
