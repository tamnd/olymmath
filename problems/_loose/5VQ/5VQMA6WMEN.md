---
tag: 5VQMA6WMEN
kind: problem
type: answer
answer: f_1(x)=0f_2(x)=-x^2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=75615
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine all functions $f: \mathbb{R} \rightarrow \mathbb{R}$ such that for all real numbers $x$ and $y$,

$$
f\left(x^{2}+f(y)\right)=(x-y)^{2} \cdot f(x+y) \text {. }
$$
