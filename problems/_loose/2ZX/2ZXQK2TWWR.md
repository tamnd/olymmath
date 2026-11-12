---
tag: 2ZXQK2TWWR
kind: problem
type: answer
answer: f(x)=\frac{2}{\pi}\int_{0}^{+\infty}\frac{\psi()}{}\sin\frac{x^{2}}{4}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=31168
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In problems concerning the oscillations of a thin elastic plate, we arrive at the following integral equation:

$$
\psi(t)=\frac{1}{2 b t} \int_{0}^{+\infty} x f(x) \sin \frac{x^{2}}{4 b t} d x
$$

where $f(x)$ is the unknown function, and $\psi(t)$ is the known function.
