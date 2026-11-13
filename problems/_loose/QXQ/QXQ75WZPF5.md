---
tag: QXQ75WZPF5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=125193
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $p$ and $n$ be positive integers, $C_{h, k} \in [0,1], h=1,2, \cdots, n$, $k=1,2, \cdots, p h$. Prove:
$$
\sum_{h=1}^{n} \sum_{k=1}^{p h}\left(\frac{C_{h, k}}{h}\right)^{2} \leqslant 2 p \sum_{h=1}^{n} \sum_{k=1}^{p h} C_{h, k} .
$$
