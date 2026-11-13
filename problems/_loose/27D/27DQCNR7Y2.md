---
tag: 27DQCNR7Y2
kind: problem
type: answer
answer: \frac{n(n+1)x^{n+1}}{2(x-1)}-\frac{nx^{n+1}}{(x-1)^{2}}+\frac{x(x^{n}-1)}{(x-1)^{3}}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=174415
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let's write the polynomial

$$
S=x+3 x^{2}+6 x^{3}+10 x^{4}+\ldots+\frac{n(n+1)}{2} x^{n}
$$

in a simpler form, if $x \neq 1$.
