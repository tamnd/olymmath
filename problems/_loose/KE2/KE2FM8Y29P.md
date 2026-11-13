---
tag: KE2FM8Y29P
kind: problem
type: answer
answer: \frac{4}{9}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=106398
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the largest real number $a$ such that for all positive integers $n$ and all real numbers $x_{0}, x_{1}, \cdots, x_{n}\left(0=x_{0}<x_{1}<\cdots\right.$ $\left.<x_{n}\right)$, we have
$$
\sum_{i=1}^{n} \frac{1}{x_{i}-x_{i-1}} \geqslant a \sum_{i=1}^{n} \frac{i+1}{x_{i}} .
$$
