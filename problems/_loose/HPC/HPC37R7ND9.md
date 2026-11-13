---
tag: HPC37R7ND9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=218555
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ and $k$ be positive integers. A function $f : \{1, 2, 3, 4, \dots , kn - 1, kn\} \to \{1, \cdots , 5\}$ is *good* if $f(j + k) - f(j)$ is multiple of $k$ for every $j = 1, 2. \cdots , kn - k$.

**(a)** Prove that, if $k = 2$, then the number of good functions is a perfect square for every positive integer $n$.
**(b)** Prove that, if $k = 3$, then the number of good functions is a perfect cube for every positive integer $n$.
