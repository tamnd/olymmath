---
tag: 4CBZ09C4WS
kind: problem
type: answer
answer: \frac{(x_{1}-x_{2})(x_{2}-x_{3})(x_{3}-x_{1})}{2x_{1}x_{2}x_{3}}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=173728
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
If points $P_{1}\left(x_{1}, y_{1}\right), P_{2}\left(x_{2}, y_{2}\right), P_{3}\left(x_{3}, y_{3}\right)$ are on the curve $x y=1$, then the area of triangle $P_{1} P_{2} P_{3}$ is:

$$
t=\frac{\left(x_{1}-x_{2}\right)\left(x_{2}-x_{3}\right)\left(x_{3}-x_{1}\right)}{2 x_{1} x_{2} x_{3}}
$$
