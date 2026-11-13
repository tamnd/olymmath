---
tag: 5RV34STG4P
kind: problem
type: answer
answer: f(x)=0\text{or}f(x)=2|x|
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=115100
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all functions $f: \mathbf{R} \rightarrow \mathbf{R}$, such that for any real numbers $x, y$, we have
$$
f\left(x^{2}\right) f\left(y^{2}\right)+|x| f\left(-x y^{2}\right)=3|y| f\left(x^{2} y\right) \text {. }
$$
