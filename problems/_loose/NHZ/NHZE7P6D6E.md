---
tag: NHZE7P6D6E
kind: problem
type: answer
answer: x_1 \in \left(0, \frac{\sqrt{3}}{2}\right)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=268055
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The sequence $ (x_n)$, $ n\in\mathbb{N}^*$ is defined by $ |x_1|<1$, and for all $ n \ge 1$, $$ x_{n+1} =\frac{-x_n +\sqrt{3-3x_n^2}}{2}$$ (a) Find the necessary and sufficient condition for $ x_1$ so that each $ x_n > 0$.
(b) Is this sequence periodic? And why?
