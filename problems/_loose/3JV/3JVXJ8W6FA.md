---
tag: 3JVXJ8W6FA
kind: problem
type: answer
answer: x_{1}=1+\sqrt{1+\log_{2+\sqrt{3}}10},\quadx_{2}=1-\sqrt{1+\log_{2+\sqrt{3}}10}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=40536
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Solve the equation

$$
(2+\sqrt{3})^{x^{2}-2 x+1}+(2-\sqrt{3})^{x^{2}-2 x-1}=\frac{101}{10(2-\sqrt{3})}
$$
