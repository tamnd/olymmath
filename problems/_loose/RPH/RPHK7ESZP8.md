---
tag: RPHK7ESZP8
kind: problem
type: answer
answer: "1990"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=108678
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let real numbers $x_{1}, x_{2}, \cdots, x_{1991}$ satisfy the condition
$$
\sum_{i=1}^{1990}\left|x_{i}-x_{i+1}\right|=1991 \text {. }
$$

and $y_{k}=\frac{1}{k} \sum_{i=1}^{k} x_{i}(k=1,2, \cdots, 1991)$. Find the maximum value of $\sum_{i=1}^{1990}\left|y_{i}-y_{i+1}\right|$.
(25th All-Soviet Union Mathematical Olympiad)
