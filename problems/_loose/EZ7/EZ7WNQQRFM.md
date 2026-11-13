---
tag: EZ7WNQQRFM
kind: problem
type: answer
answer: (p, q, r, s, t) = (3, 0, 12, 0, -15)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=213922
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the polynomials $P(x)=px^4+qx^3+rx^2+sx+t,\ Q(x)=\frac{d}{dx}P(x)$, find the real numbers $p,\ q,\ r,\ s,\ t$ such that $P(\sqrt{-5})=0,\ Q(\sqrt{-2})=0$ and $\int_0^1 P(x)dx=-\frac{52}{5}.$
