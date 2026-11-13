---
tag: VR2RN01PCT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=170693
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a_{k}=\frac{1}{\binom{n}{k}}, b_{k}=\frac{1}{2^{n-k}}, k=1,2, \ldots, n$.

Prove that

$$
a_{1}+\frac{a_{2}}{2}+\frac{a_{3}}{3}+\ldots+\frac{a_{n}}{n}=b_{1}+\frac{b_{2}}{2}+\frac{b_{3}}{3}+\ldots+\frac{b_{n}}{n}
$$
