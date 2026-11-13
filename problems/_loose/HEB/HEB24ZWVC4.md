---
tag: HEB24ZWVC4
kind: problem
type: answer
answer: "0"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=239276
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We call a path Valid if
i. It only comprises of the following kind of steps:
A. $(x, y) \rightarrow (x + 1, y + 1)$
B. $(x, y) \rightarrow (x + 1, y - 1)$
ii. It never goes below the x-axis.
Let $M(n)$ = set of all valid paths from $(0,0) $, to $(2n,0)$, where $n$ is a natural number.
Consider a Valid path $T \in M(n)$.
Denote $\phi(T) = \prod_{i=1}^{2n} \mu_i$,
where $\mu_i$=
a) $1$, if the $i^{th}$ step is $(x, y) \rightarrow (x + 1, y + 1)$
b) $y$, if the $i^{th} $ step is $(x, y) \rightarrow (x + 1, y - 1)$
Now Let $f(n) =\sum _{T \in M(n)} \phi(T)$. Evaluate the number of zeroes at the end in the decimal expansion of $f(2021)$
