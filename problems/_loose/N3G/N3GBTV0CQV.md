---
tag: N3GBTV0CQV
kind: problem
type: answer
answer: f(x)=3orf(x)=2x+1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=107640
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine all polynomials $f(x)$ that satisfy the following condition:
$$
f(x+1)=\frac{1}{2} f[f(x)]+\frac{3}{2} .
$$
