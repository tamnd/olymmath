---
tag: 85REQWB0RT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=161177
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For natural numbers $k, m$ and $n$ that satisfy the inequalities $k \geqslant 2$ and $m<n$, it holds that

$$
\left(\frac{m}{n}\right)^{k}=\overline{0, x_{1} x_{2} \ldots x_{9} x_{1} x_{2} \ldots x_{9} x_{1} x_{2} \ldots x_{9} \ldots}
$$

where $x_{1}, x_{2}, \ldots, x_{9}$ are some digits (not necessarily distinct), and the block $\overline{x_{1} x_{2} \ldots x_{9}}$ repeats periodically infinitely many times. Find all possible values for $\left(\frac{m}{n}\right)^{k}$.
