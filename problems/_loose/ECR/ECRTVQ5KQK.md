---
tag: ECRTVQ5KQK
kind: problem
type: answer
answer: \sqrt{x_{1}}+\sqrt{x_{2}}\geqslant10
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=133613
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given an integer $n \geqslant 2$, real numbers
$$
\begin{array}{l}
x_{1} \geqslant x_{2} \geqslant \cdots \geqslant x_{n} \geqslant 0, \\
\sum_{i=1}^{n} x_{i} \leqslant 400, \text { and } \sum_{i=1}^{n} x_{i}^{2} \geqslant 10^{4} .
\end{array}
$$

Prove: $\sqrt{x_{1}}+\sqrt{x_{2}} \geqslant 10$, and determine whether equality can be achieved.
