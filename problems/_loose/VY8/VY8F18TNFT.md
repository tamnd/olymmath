---
tag: VY8F18TNFT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=42419
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove that if $s_{1}, s_{2}, \ldots, s_{n}$ denote respectively the sums of the first, second, and so on up to the $n$-th powers of the roots of the quadratic equation

$$
a x^{2}+b x+c=0
$$

then

$$
\begin{gathered}
a s_{2}+b s_{1}+2 c=0, a s_{3}+b s_{2}+c s_{1}=0 \\
\ldots a s_{n}+b s_{n-1}+c s_{n-2}=0
\end{gathered}
$$
