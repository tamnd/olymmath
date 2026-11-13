---
tag: XKZ4Y1KBJT
kind: problem
type: answer
answer: (2, 2, 2)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0001.parquet#row=299
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all triples $(x, y, z)$ of real numbers larger than $1$, so that
$$
\left(\frac{x}{2} + \frac{1}{x} - 1\right) \left(\frac{y}{2} + \frac{1}{y} - 1\right) \left(\frac{z}{2} + \frac{1}{z} - 1\right) = \left(1 - \frac{x}{yz}\right) \left(1 - \frac{y}{xz}\right) \left(1 - \frac{z}{xy}\right).
$$
