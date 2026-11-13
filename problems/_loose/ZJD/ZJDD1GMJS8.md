---
tag: ZJDD1GMJS8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=260240
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$P(x)$ is a polynomial of degree $3n$ such that

\begin{eqnarray*}
P(0) = P(3) = \cdots &=& P(3n) = 2, \\
P(1) = P(4) = \cdots &=& P(3n-2) = 1, \\
P(2) = P(5) = \cdots &=& P(3n-1) = 0, \text{ and }\\
&& P(3n+1) = 730.\end{eqnarray*}

Determine $n$.
