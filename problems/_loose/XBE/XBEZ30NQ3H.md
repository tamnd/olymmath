---
tag: XBEZ30NQ3H
kind: problem
type: answer
answer: x+1=\frac{3}{2}+\frac{2}{\pi^{2}}\sum_{n=1}^{\infty}\frac{(-1)^{n}-1}{n^{2}}\cosn\pix
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33178
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Expand the function $y=x+1$ into a Fourier series on the interval $(0,1)$ with respect to the system $1, \cos \pi x, \cos 2 \pi x, \ldots, \cos n \pi x, \ldots$
