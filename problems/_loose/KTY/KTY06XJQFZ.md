---
tag: KTY06XJQFZ
kind: problem
type: answer
answer: S_{n}=\frac{1}{2n-1},\quada_{n}=\begin{cases}1,&n=1\\\frac{-2}{(2n-1)(2n-3)},&n\geqslant2\end{cases}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=108969
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let the sequence $\left\{a_{n}\right\}$ have the first term $a_{1}=1$, and the sum of the first $n$ terms $S_{n}$ and the general term $a_{n}$ satisfy $a_{n}=\frac{2 S_{n}^{2}}{2 S_{n}-1}$ $(n \geqslant 2)$, find: (1) the general formula for the sequence $\left\{S_{n}\right\}$; (2) the general formula for the sequence $\left\{a_{n}\right\}$.
