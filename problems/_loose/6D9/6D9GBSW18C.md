---
tag: 6D9GBSW18C
kind: problem
type: answer
answer: "99"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=160417
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For any positive integer $n$, let $N_{n}$ be the set of integers from 1 to $n$, i.e., $N_{n}=$ $\{1,2,3, \cdots, n\}$. Now assume that $n \geq 10$. Determine the maximum value of $n$ such that the following inequality
$$
\mathrm{i}_{\substack{a, b \in A \\ a \neq b}}|a-b| \leq 10
$$
holds for each $A \subseteq N_{n}$ with $|A| \geq 10$.
