---
tag: 3R2QHR9B8Z
kind: problem
type: answer
answer: 1 - \frac{e^{\frac{3 - \sqrt{5}}{2}}}{6(\sqrt{5} - 2)(e - 1)}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=242070
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(1) For integer $n=0,\ 1,\ 2,\ \cdots$ and positive number $a_{n},$ let $f_{n}(x)=a_{n}(x-n)(n+1-x).$ Find $a_{n}$ such that the curve $y=f_{n}(x)$ touches to the curve $y=e^{-x}.$

(2) For $f_{n}(x)$ defined in (1), denote the area of the figure bounded by $y=f_{0}(x), y=e^{-x}$ and the $y$-axis by $S_{0},$ for $n\geq 1,$ the area of the figure bounded by $y=f_{n-1}(x),\ y=f_{n}(x)$ and $y=e^{-x}$ by $S_{n}.$ Find $\lim_{n\to\infty}(S_{0}+S_{1}+\cdots+S_{n}).$
