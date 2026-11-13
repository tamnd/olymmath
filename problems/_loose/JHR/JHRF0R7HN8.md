---
tag: JHRF0R7HN8
kind: problem
type: answer
answer: '[\arctan\frac{+b}{-b},\pi+\arctan\frac{-b}{+b}]'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=95564
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a complex number $z$ satisfies $\arg (z+a+a \mathrm{i})=\frac{\pi}{4}$, and $\arg (z-a-a \mathrm{i})=\frac{5 \pi}{4}\left(a \in \mathbf{R}^{+}\right)$, find the range of $\arg (z-b+b \mathrm{i})(a>b>0)$.
