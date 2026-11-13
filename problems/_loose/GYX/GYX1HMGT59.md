---
tag: GYX1HMGT59
kind: problem
type: answer
answer: 0.68 < \ln 2 < 0.71
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=242061
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(1) For real numbers $x,\ a$ such that $0<x<a,$ prove the following inequality.
$$\frac{2x}{a}<\int_{a-x}^{a+x}\frac{1}{t}\ dt<x\left(\frac{1}{a+x}+\frac{1}{a-x}\right). $$
(2) Use the result of $(1)$ to prove that $0.68<\ln 2<0.71.$
