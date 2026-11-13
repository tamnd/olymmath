---
tag: HHK4RCX69H
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=239349
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
for any positive integer $n$ greater than $1$, show that
$$2^n<\binom{2n}{n}<\frac{2^n}{\prod\limits_{i=0}^{n-1} \left(1-\frac{i}{n}\right)}$$
