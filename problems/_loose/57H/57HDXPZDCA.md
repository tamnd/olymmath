---
tag: 57HDXPZDCA
kind: problem
type: answer
answer: a_{2019}\geq1-\frac{1}{\sqrt{2019\cdot2020}}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=187370
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a_{1}, a_{2}, \ldots, a_{2020}$ be positive real numbers such that

$$
\begin{aligned}
& a_{1} \leq a_{2} \leq \ldots \leq a_{2020}, a_{1}+a_{2}+\ldots+a_{2020}=2020 \text { and } \\
& a_{1}^{2}+a_{2}^{2}+\ldots+a_{2020}^{2}=2021 . \text { Prove that } a_{2019} \geq 1-\frac{1}{\sqrt{2019 \cdot 2020}}
\end{aligned}
$$
