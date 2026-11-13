---
tag: 9EZDF68KK6
kind: problem
type: answer
answer: a = -\frac{1}{\sqrt{\pi}}, b = \frac{\sqrt{3}}{\sqrt{\pi}}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=242087
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the values of real numbers $a,\ b$ for which the function $f(x)=a|\cos x|+b|\sin x|$ has local minimum at $x=-\frac{\pi}{3}$ and satisfies $\int_{-\frac{\pi}{2}}^{\frac{\pi}{2}}\{f(x)\}^{2}dx=2$.
