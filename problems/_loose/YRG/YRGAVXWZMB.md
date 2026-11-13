---
tag: YRGAVXWZMB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=136486
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a_{i} \in[0,1](i=1,2, \cdots, n)$. Prove: there exists $x \in(0,1)$, such that
$$
\sum_{i=1}^{n} \frac{1}{\left|x-a_{i}\right|} \leqslant 8 n \sum_{i=1}^{n} \frac{1}{2 i-1} .
$$
