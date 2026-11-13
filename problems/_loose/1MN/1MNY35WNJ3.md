---
tag: 1MNY35WNJ3
kind: problem
type: answer
answer: \left|\int_0^1 f(t) \, dt\right| < \frac{1}{4}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=209905
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f:[0,1]\rightarrow \mathbb{R}$ a differentiable function such that $f(0)=f(1)=0$ and $|f'(x)|\le 1,\ \forall x\in [0,1]$. Prove that:

$$\left|\int_0 ^1f(t)dt\right|<\frac{1}{4}$$
