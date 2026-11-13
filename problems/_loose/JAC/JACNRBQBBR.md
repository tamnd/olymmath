---
tag: JACNRBQBBR
kind: problem
type: answer
answer: "372"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=215508
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f$ be a function from the set $X = \{1,2, \dots, 10\}$ to itself. Call a partition ($S$, $T$) of $X$ $f-balanced$ if for all $s \in S$ we have $f(s) \in T$ and for all $t \in T$ we have $f(t) \in S$. (A partition $(S, T)$ is a pair of subsets $S$ and $T$ of $X$ such that $S\cap T = \emptyset$ and $S \cup T = X$. Note that $(S, T)$ and $(T, S)$ are considered the same partition).

Let $g(f)$ be the number of $f-balanced$ partitions, and let $m$ equal the maximum value of $g$ over all functions $f$ from $X$ to itself. If there are $k$ functions satisfying $g(f) = m$, determine $m+k$.

*2016 CCA Math Bonanza Individual #12*
