---
tag: X7EE0DAJHY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=105468
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given $0<a_{i} \leqslant \frac{1}{2}(i=1,2, \cdots, n)$.
Prove:
$$
\begin{array}{l}
\frac{\sum_{i=1}^{n} a_{i}^{2}}{\sum_{i=1}^{n} a_{i}}-\sqrt[n]{\prod_{i=1}^{n} a_{i}} \\
\geqslant \frac{\sum_{i=1}^{n}\left(1-a_{i}\right)^{2}}{\sum_{i=1}^{n}\left(1-a_{i}\right)}-\sqrt[n]{\prod_{i=1}^{n}\left(1-a_{i}\right)} .
\end{array}
$$
