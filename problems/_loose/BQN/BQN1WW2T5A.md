---
tag: BQN1WW2T5A
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=53000
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$P$ and $Q$ are subsets of the set of expressions of the form ( $a_{1}, a_{2}, \ldots, a_{n}$ ), where $a_{i}$ are natural numbers not exceeding a given natural number $k$ (there are a total of $k^{n}$ such expressions). For each element ( $p_{1}, \ldots, p_{n}$ ) of the set $P$ and each element $\left(q_{1}, \ldots, q_{n}\right)$ of the set $Q$, there exists at least one index $m$ such that $p_{m}=q_{m}$. Prove that at least one of the sets $P$ and $Q$ consists of no more than $k^{n-1}$ elements for
a) $k=2$ and any natural $n$;

b) $n=2$ and any natural $k>1$;

c) any natural $n$ and any natural $k>1$.
