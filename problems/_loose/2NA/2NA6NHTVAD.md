---
tag: 2NA6NHTVAD
kind: problem
type: answer
answer: "1975"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=120800
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the minimum value of
$$
\begin{aligned}
A & =\sqrt{\left(1264-z_{1}-\cdots-z_{n}\right)^{2}+x_{n}^{2}+y_{n}^{2}}+ \\
& \sqrt{z_{n}^{2}+x_{n-1}^{2}+y_{n-1}^{2}}+\cdots+\sqrt{z_{2}^{2}+x_{1}^{2}+y_{1}^{2}}+ \\
& \sqrt{z_{1}^{2}+\left(948-x_{1}-\cdots-x_{n}\right)^{2}+\left(1185-y_{1}-\cdots-y_{n}\right)^{2}}
\end{aligned}
$$

where $x_{i}, y_{i}, z_{i}, i=1,2, \cdots, n$, are non-negative real numbers.
