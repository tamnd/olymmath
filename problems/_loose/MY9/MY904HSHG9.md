---
tag: MY904HSHG9
kind: problem
type: answer
answer: p(x)=x^{3}+2x^{2}-2x
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=170974
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let's find the polynomial $p(x)$ with integer coefficients of the lowest degree, such that its leading coefficient is 1, and it satisfies $p(0)=0$, $p(1)=1$, and $p(-1)=3$.
