---
tag: 2ZPRW3S1RQ
kind: problem
type: answer
answer: "11"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=144885
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a natural number, and $f(n)=n^{2}+1$ (in decimal) be the sum of the digits of $n^2 + 1$,
$$
\begin{array}{l}
f^{(1)}(n)=f(n), f^{(2)}(n)=f(f(n)), \cdots, f^{(k+1)}(n)=f\left(f^{(k)}(n)\right), \\
k \geqslant 1, \text { find } f^{(100)}(1990) .
\end{array}
$$
(Shanghai High School Mathematics Competition, 1990)
