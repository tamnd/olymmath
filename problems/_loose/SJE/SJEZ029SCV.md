---
tag: SJEZ029SCV
kind: problem
type: answer
answer: x+1=\frac{4(\pi+1)}{\pi}\sum_{n=0}^{\infty}\frac{(-1)^{n}}{2n+1}\cos\frac{2n+1}{2}x,x\in(0,\pi)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33177
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Expand the function $y=x+1$ into a Fourier series on the interval $(0, \pi)$ with respect to the system $1, \cos \frac{1}{2} x, \cos \frac{3}{2} x, \ldots, \cos \frac{2 n+1}{2} x, \ldots$
