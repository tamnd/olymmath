---
tag: A4EB4GCGPM
kind: problem
type: answer
answer: "1376"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=267080
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For each positive integer $n$ let $S_n$ denote the set of positive integers $k$ such that $n^k-1$ is divisible by $2006$. Define the function $P(n)$ by the rule $$P(n):=\begin{cases}\min(s)_{s\in S_n}&\text{if }S_n\neq\emptyset,\\0&\text{otherwise}.\end{cases}$$ Let $d$ be the least upper bound of $\{P(1),P(2),P(3),\ldots\}$ and let $m$ be the number of integers $i$ such that $1\leq i\leq 2006$ and $P(i) = d$. Compute the value of $d+m$.
