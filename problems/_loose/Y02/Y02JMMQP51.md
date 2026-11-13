---
tag: Y02JMMQP51
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=112735
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $x_{i} \in \mathrm{R}^{+}(i=1,2, \cdots, n)$, prove that:
$$
\sum_{i=1}^{n} \frac{x_{i} x_{i+1}}{x_{i}+x_{i+1}} \leqslant \frac{1}{2} \sum_{i=1}^{n} x_{i} \text { (take } x_{n+1}=x_{1} \text { ). }
$$
