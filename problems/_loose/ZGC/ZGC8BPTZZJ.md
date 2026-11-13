---
tag: ZGC8BPTZZJ
kind: problem
type: answer
answer: P(x)=a_{0}(x+\frac{1}{2})(x+\frac{1}{2^{2}})\cdot\ldots\cdot(x+\frac{1}{2^{999}})
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=187983
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all polynomials with real coefficients such that for every real number $x$ the following holds

$$
(1+2 x) P(2 x)=\left(1+2^{1000} x\right) P(x)
$$
