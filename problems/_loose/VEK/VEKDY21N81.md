---
tag: VEKDY21N81
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=130286
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(Chebyshev's Inequality) Let $a_{1} \leqslant a_{2} \leqslant \cdots \leqslant a_{n}, b_{1} \leqslant b_{2} \leqslant \cdots \leqslant b_{n}$, then
$$
n \cdot \sum_{k=1}^{n} a_{k} b_{k} \geqslant\left(\sum_{k=1}^{n} a_{k}\right) \cdot\left(\sum_{k=1}^{n} b_{k}\right) \geqslant n \cdot \sum_{k=1}^{n} a_{k} b_{n-k+1} \text {. }
$$
