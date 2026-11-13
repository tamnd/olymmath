---
tag: E1SWGCNVTC
kind: problem
type: answer
answer: "985.250000"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=128539
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let the sequence $x_{1}, x_{2}, x_{3}, \cdots$ satisfy
$$
\begin{array}{ll}
& 3 x_{n}-x_{n-1}=n, n=2,3, \cdots \\
\text { and } \left|x_{1}\right|<1971 .
\end{array}
$$

Try to find $x_{1971}$, accurate to 0.000001.
