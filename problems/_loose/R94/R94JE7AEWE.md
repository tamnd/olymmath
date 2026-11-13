---
tag: R94JE7AEWE
kind: problem
type: answer
answer: k=\frac{^2+-2}{2},n=^2-2for\leq-3or\geq3
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90863
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine all pairs $(n, k)$ of integers such that $0<k<n$ and

$$
\left(\begin{array}{c}
n \\
k-1
\end{array}\right)+\left(\begin{array}{c}
n \\
k+1
\end{array}\right)=2\left(\begin{array}{l}
n \\
k
\end{array}\right)
$$
