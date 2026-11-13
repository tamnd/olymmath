---
tag: 4AMBAMD6R1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=91702
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
26 Prove that the number of integer solutions satisfying the following conditions:
$$
\begin{array}{c}
x_{1}+x_{2}+\cdots+x_{n}=r, \\
1 \leqslant x_{n} \leqslant k, i=1,2, \cdots, n
\end{array}
$$

is
$$
\sum_{i}^{n}(-1)^i\binom{n}{i}\binom{r - i(k+1)}{n-1}
$$
