---
tag: V1T708ENXR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=97922
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(3) Given a positive integer $n$, and real numbers $x_{1} \leqslant x_{2} \leqslant \cdots \leqslant x_{n}, y_{1} \geqslant y_{2} \geqslant \cdots \geqslant$ $y_{n}$, satisfying
$$
\sum_{i=1}^{n} i x_{i} \geqslant \sum_{i=1}^{n} i y_{i}
$$

Prove: For any real number $\alpha$, we have
$$
\sum_{i=1}^{n} x_{i}[i \alpha] \geqslant \sum_{i=1}^{n} y_{i}[i \alpha]
$$

where, $[\beta]$ denotes the greatest integer not exceeding the real number $\beta$.
