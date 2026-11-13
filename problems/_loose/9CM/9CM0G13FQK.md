---
tag: 9CM0G13FQK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=119643
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a_{n} \geqslant a_{n-1} \geqslant \cdots \geqslant a_{1} \geqslant 0, \sum_{i=1}^{n} a_{i}=1$. Prove: For any non-negative real numbers $x_{i} 、 y_{i}(1 \leqslant i \leqslant n)$, we have
$$
\begin{array}{l}
\left(\sum_{i=1}^{n} a_{i} x_{i}-\prod_{i=1}^{n} x_{i}^{a_{i}}\right)\left(\sum_{i=1}^{n} a_{i} y_{i}-\prod_{i=1}^{n} y_{i}^{a_{i}}\right) \\
\leqslant a_{n}^{2}\left(n \sqrt{\sum_{i=1}^{n} x_{i} \sum_{i=1}^{n} y_{i}}-\sum_{i=1}^{n} \sqrt{x_{i}} \sum_{i=1}^{n} \sqrt{y_{i}}\right)^{2} .
\end{array}
$$
