---
tag: GJHNZA54B8
kind: problem
type: answer
answer: x_{1,2}^{(n)}=\frac{(2\\sqrt{3})^{n}+1}{(2\\sqrt{3})^{n}-1}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=173892
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Solve the following equation:

$$
\sqrt[n]{(x+1)^{2}}+\sqrt[n]{(x-1)^{2}}=4 \sqrt[n]{x^{2}-1}
$$

Examine the cases for $n=2,3,4$ separately.
