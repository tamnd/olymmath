---
tag: 992CJYGYZM
kind: problem
type: answer
answer: 2^{2n-1}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=81227
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(Binomial coefficients) For all $k \leq n \in \mathbb{N}$, define the binomial coefficient $\binom{n}{k}$ recursively:

$$
\begin{gathered}
\binom{n}{0}=\binom{n}{n}=1 \\
\binom{n+1}{k+1}=\binom{n}{k}+\binom{n}{k+1} \text { for all } k<n
\end{gathered}
$$

1. Show that

$$
\binom{n}{k}=\frac{n!}{k!(n-k)!}
$$

2. Show that

$$
(a+b)^{n}=\sum_{k=0}^{n}\binom{n}{k} a^{k} b^{n-k}
$$

3. Calculate

$$
\sum_{k=0}^{n}\binom{2 n}{2 k}
$$
