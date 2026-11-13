---
tag: WFYSZAF7HH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=238985
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a_1=1$ and $a_n=n(a_{n-1}+1)$ for $n\ge2$. Define
$$p_n=\prod_{i=1}^n\left(1+\frac1{a_i}\right)$$Then $\lim_{n\to\infty}p_n$ is
$\textbf{(A)}~1+e$
$\textbf{(B)}~e$
$\textbf{(C)}~1$
$\textbf{(D)}~\infty$
