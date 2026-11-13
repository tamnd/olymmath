---
tag: TFDERCJHJW
kind: problem
type: answer
answer: (n+1)!-1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=161346
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a natural number. Determine how many finite sequences $\left(a_{1}, a_{2}, \ldots, a_{t}\right)$ (where $t \in \mathbb{N}$ is not fixed in advance) exist that satisfy the following three conditions:

- $a_{1}, a_{2}, \ldots, a_{t} \in\{1,2, \ldots, n\}$
- for all $j, 1 \leqslant j \leqslant t-1$, $a_{j} \leqslant a_{j+1}+1$;
- there do not exist $j$ and $k, 1 \leqslant j \leqslant k \leqslant t-1$, such that $a_{k} \leqslant a_{j}=a_{k+1}$.
