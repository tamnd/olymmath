---
tag: FEP0VMWN70
kind: problem
type: answer
answer: "1"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=216196
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $b_1$, $b_2$, $b_3$, $c_1$, $c_2$, and $c_3$ be real numbers such that for every real number $x$, we have
$$
x^6 - x^5 + x^4 - x^3 + x^2 - x + 1 = (x^2 + b_1 x + c_1)(x^2 + b_2 x + c_2)(x^2 + b_3 x + c_3).
$$
Compute $b_1 c_1 + b_2 c_2 + b_3 c_3$.
