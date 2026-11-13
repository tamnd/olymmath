---
tag: V039YQFF1Q
kind: problem
type: answer
answer: \sqrt[k]{pn^{k-1}+^{k}}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=97737
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given $x_{i} \in \mathbf{R}^{+}(i=1,2, \cdots, n), \sum_{i=1}^{n} x_{i}=m, p, q \in \mathbf{R}^{+}, 2 \leqslant k \in \mathbf{N}^{+}$. Find the maximum value of the function $f(x)=\sum_{i=1}^{n} \sqrt[h]{p x_{i}+q}$.
