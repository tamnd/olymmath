---
tag: ADE0TPZ8KA
kind: problem
type: answer
answer: "10"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=154826
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\mathbb{N}=\{1,2,3, \ldots\}$ be the set of all natural numbers and $f: \mathbb{N} \rightarrow \mathbb{N}$ be a function. Suppose $f(1)=1, f(2 n)=f(n)$ and $f(2 n+1)=f(2 n)+1$ for all natural numbers $n$.
(i) Calculate the maximum value $M$ of $f(n)$ for $n \in \mathbb{N}$ with $1 \leq n \leq 1994$.
(ii) Find all $n \in \mathbb{N}$, with $1 \leq n \leq 1994$, such that $f(n)=M$.
