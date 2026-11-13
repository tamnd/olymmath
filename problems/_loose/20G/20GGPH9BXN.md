---
tag: 20GGPH9BXN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=269061
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
If $x_k \in \mathbb{R}$ ($k=1, 2, \cdots , n$) and $m \in \mathbb{N}$ then

- $\sum \limits_{cyc} \left (x_1^2 -x_1x_2+x_2^2 \right )^m \leq 3^m \sum \limits_{k=1}^n x_k^{2m}$

- $\prod \limits_{cyc} \left (x_1^2 -x_1x_2+x_2^2 \right )^m \leq \left (\frac{3^m}{n}\right )^m \left (\sum \limits_{k=1}^n x_k^{2m}\right )^n$
