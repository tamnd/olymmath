---
tag: N5RBXPP094
kind: problem
type: answer
answer: \frac{10}{3}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=209485
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f(x)$ be a continuous function defined on $0\leq x\leq \pi$ and satisfies $f(0)=1$ and

$$\left\{\int_0^{\pi} (\sin x+\cos x)f(x)dx\right\}^2=\pi \int_0^{\pi}\{f(x)\}^2dx.$$

Evaluate $\int_0^{\pi} \{f(x)\}^3dx.$
