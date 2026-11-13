---
tag: 1MS4GPJNMS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=262790
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A function $f$ with domain $A$ and range $B$ is called *injective* if every input in $A$ maps to a unique output in $B$ (equivalently, if $x, y \in A$ and $x \neq y$, then $f(x) \neq f(y)$). With $\mathbb{C}$ denoting the set of complex numbers, let $P$ be an injective polynomial with domain and range $\mathbb{C}$. Suppose further that $P(0) = 2021$ and that when $P$ is written in standard form, all coefficients of $P$ are integers. Compute the smallest possible positive integer value of $P(10)/P(1)$.
