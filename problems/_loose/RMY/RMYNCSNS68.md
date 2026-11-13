---
tag: RMYNCSNS68
kind: problem
type: answer
answer: f(x)=x
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=154916
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all functions from the positive integers to the positive integers such that for all $x, y$ we have:
$$
2 y f\left(f\left(x^{2}\right)+x\right)=f(x+1) f(2 x y) \text {. }
$$
