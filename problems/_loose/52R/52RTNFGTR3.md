---
tag: 52RTNFGTR3
kind: problem
type: answer
answer: 233 \mid f(2015) + 1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=253571
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\{F_n\}^\infty_{n=1}$ be the Fibonacci sequence and let $f$ be a polynomial of degree $1006$ such that $f(k) = F_k$ for all $k \in \{1008, \dots , 2014\}$. Prove that $$233\mid f(2015)+1.$$

*Note: $F_1=F_2=1$ and $F_{n+2}=F_{n+1}+F_n$ for all $n\geq 1$.*
