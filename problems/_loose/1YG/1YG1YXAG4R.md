---
tag: 1YG1YXAG4R
kind: problem
type: answer
answer: \varphi(x)=e^{-x}(\frac{x}{1+\lambda}+\frac{\lambda}{1-\lambda^{2}})
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=31175
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Solve the integral equation

$$
\varphi(x)=x e^{-x}+\lambda \int_{0}^{\infty} J_{0}(2 \sqrt{x t}) \varphi(t) d t (|\lambda| \neq 1)
$$
