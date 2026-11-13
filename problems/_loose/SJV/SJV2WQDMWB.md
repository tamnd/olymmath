---
tag: SJV2WQDMWB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=217471
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine the smallest integer $n$ for which there exist integers $x_1,\ldots,x_n$ and positive integers $a_1,\ldots,a_n$ so that
\begin{align*}
x_1+\cdots+x_n &=0,\\
a_1x_1+\cdots+a_nx_n&>0, \text{ and }\\
a_1^2x_1+\cdots+a_n^2x_n &<0.
\end{align*}
