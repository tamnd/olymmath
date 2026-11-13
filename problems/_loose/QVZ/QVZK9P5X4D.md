---
tag: QVZK9P5X4D
kind: problem
type: answer
answer: f(x)\geqslant\frac{\sinx}{x}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=113732
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the functional inequality
$$
f(x) \geqslant \cos \frac{x}{2} f\left(\frac{x}{2}\right),
$$

where $f(x), x \in(-\pi, \pi)$ is a continuous function, and $f(0)=1$, prove: $f(x) \geqslant \frac{\sin x}{x}$.
