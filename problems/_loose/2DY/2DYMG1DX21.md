---
tag: 2DYMG1DX21
kind: problem
type: answer
answer: -\infty < a \leq 0 \cup \frac{6}{3 + 2\pi^2} \leq a < \infty
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=242066
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For a constant $a,$ let $f(x)=ax\sin x+x+\frac{\pi}{2}.$ Find the range of $a$ such that $\int_{0}^{\pi}\{f'(x)\}^{2}\ dx \geq f\left(\frac{\pi}{2}\right).$
