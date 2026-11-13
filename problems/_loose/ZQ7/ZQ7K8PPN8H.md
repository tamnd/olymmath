---
tag: ZQ7K8PPN8H
kind: problem
type: answer
answer: (a, b) = (3, 3n+2)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=264007
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For a finite nonempty set $A$ of positive integers, $A =\{a_1, a_2,\dots , a_n\}$, we say the calamitous complement of A is the set of all positive integers $k$ for which there do not exist nonnegative integers $w_1, w_2, \dots , w_n$ with $k = a_1w_1 + a_2w_2 +\dots + a_nw_n.$ The calamitous complement of $A$ is denoted $cc(A)$. For example, $cc(\{5, 6, 9\}) = \{1, 2, 3, 4, 7, 8, 13\}$.

Find all pairs of positive integers $a, b$ with $1 < a < b$ for which there exists a set $G$ satisfying all of the following properties:
1. $G$ is a set of at most three positive integers,

2. $cc(\{a, b\})$ and $cc(G)$ are both finite sets, and

3. $cc(G) = cc(\{a, b\})\cup \{m\}$ for some $m$ not in $cc(\{a, b\})$.
