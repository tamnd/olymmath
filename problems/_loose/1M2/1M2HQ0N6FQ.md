---
tag: 1M2HQ0N6FQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=39228
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove that

$$
\frac{(-1)^{k} s_{k}}{k}=\sum \frac{(-1)^{l_{1}+l_{2}+\ldots+l_{n}}\left(l_{1}+l_{2}+\ldots+l_{n}-1\right)!}{l_{1}!\ldots l_{n}!} \sigma_{1}^{l_{1}} \ldots \sigma_{n}^{l_{n}}
$$

where the summation is over all sets of non-negative integers $l_{1}, \ldots, l_{n}$, for which $l_{1}+2 l_{2}+\ldots+n l_{n}=k$ (the first Waring's formula).
