---
tag: 8DNYAJE43E
kind: problem
type: answer
answer: F(x)=-\frac{1}{2020(\sinx+3\cosx)^{2020}}-\frac{1}{2021(\sinx+3\cosx)^{2021}}+\frac{1}{2020}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=85168
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let the function $f:\left[\pi ; \frac{3 \pi}{2}\right] \rightarrow \mathbb{R}, f(x)=\frac{3 \cos (2 x)-4 \sin (2 x)+\cos x-3 \sin x}{(\sin x+3 \cos x)^{2022}}$. Determine the primitive $F:\left[\pi ; \frac{3 \pi}{2}\right] \rightarrow \mathbb{R}$ of the function $f$, for which $F\left(\frac{3 \pi}{2}\right)=\frac{1}{2021}$.
