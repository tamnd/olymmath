---
tag: RHXHPEKHAB
kind: problem
type: answer
answer: f(x) = ax + b
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=219510
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f:\mathbb{R}\to\mathbb{R}$ be a twice differentiable function such that $$\frac{1}{2y}\int_{x-y}^{x+y}f(t) dt=f(x) \forall~x\in\mathbb{R}~\&~y>0$$ Show that there exist $a,b\in\mathbb{R}$ such that $f(x)=ax+b$ for all $x\in\mathbb{R}$.
