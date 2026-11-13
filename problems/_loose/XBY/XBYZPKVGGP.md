---
tag: XBYZPKVGGP
kind: problem
type: answer
answer: x_{n}=\frac{2}{3}(2^{n}-2^{-n})
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=113124
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given $x_{1}=1, x_{n+1}=\frac{1}{4}\left(5 x_{n}+\sqrt{9 x_{n}^{2}+16}\right)$, find $x_{n}$.
