---
tag: GDTB0YTFGF
kind: problem
type: answer
answer: Yes; Q(x) = (2x^3 + 1)(x^2 - x + 1), which excludes only the prime 2.
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Turkey/train/0000.parquet#row=267
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For a polynomial $Q$ with integer coefficient and prime $p$, we say that $Q$ excludes $p$ if there is no integer $n$ for which $p \mid Q(n)$. Does there exist a polynomial of degree $5$ with integer coefficients having no rational roots which excludes exactly one prime?
