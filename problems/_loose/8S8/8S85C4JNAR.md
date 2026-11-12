---
tag: 8S85C4JNAR
kind: problem
type: answer
answer: -12+16(x+1)-7(x+1)^{2}+(x+1)^{3}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33416
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Expand the function $f(x)=x^{3}-4 x^{2}+5 x-2$ using the Taylor formula in powers of $(x+1)$, i.e., with the center of expansion at the point $x_{0}=-1$.
