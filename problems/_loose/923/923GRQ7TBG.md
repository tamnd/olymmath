---
tag: 923GRQ7TBG
kind: problem
type: answer
answer: a_{n}=[\frac{1}{2}(2+\sqrt{3})^{n}+\frac{1}{2}(2-\sqrt{3})^{n}]^{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=96898
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(2005 Jiangsu Winter Camp) Let the sequences $\left\{a_{n}\right\}$ and $\left\{b_{n}\right\}$ satisfy $a_{0}=1, b_{0}=0$,
and $\left\{\begin{array}{l}a_{n+1}=7 a_{n}+6 b_{n}-3, \\ b_{n+1}=8 a_{n}+7 b_{n}-4 .\end{array}\right.$
(1)
(2) $n=0,1,2, \cdots$
Find $a_{n}$.
