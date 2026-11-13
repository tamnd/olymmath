---
tag: W6HSS2S6FS
kind: problem
type: answer
answer: \frac{\pi^{2}}{16}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=93107
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Try to find the largest constant $c$, such that for any positive integer $n$ and any $n$ positive real numbers $a_{i}(1 \leq i \leq n)$, we have $\left(\sum_{i=1}^{n} a_{i}^{2}\right)\left(\sum_{1 \leq i, j \leq n} \max \{i, j\} a_{i} a_{j}\right) \geq c \cdot\left(\sum_{i=1}^{n} a_{i}\right)^{4}$.
