---
tag: QKWKT5R9JS
kind: problem
type: answer
answer: \frac{\sqrt{k}}{2\sqrt{k}-1}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=109620
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $x_{1}, x_{2}, \cdots, x_{n} \geqslant 0$ and $x_{1}+x_{2}+\cdots+x_{n} \geqslant k, k$ be a positive constant, find the maximum value of $f\left(x_{1}, x_{2}, \cdots, x_{n}\right)=\frac{x_{1} \sqrt{\sum_{i=1}^{n} x_{i}}}{\left(\sum_{i=1}^{n-1} x_{i}\right)^{2}+x_{n}}$.
