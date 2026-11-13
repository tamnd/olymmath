---
tag: E6PWW4BGR1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=124295
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given positive integers $p, q$, define the sequence $\left\{a_{n}\right\}$:
$$
\begin{array}{l}
a_{1}=a_{2}=1, \\
a_{n+2}=p a_{n+1}+q a_{n}(n=1,2, \cdots) .
\end{array}
$$

Prove: For any positive integers $m, n$, $\left(a_{m}, a_{n}\right) = a_{(m, n)}$ if and only if $p=1$.
