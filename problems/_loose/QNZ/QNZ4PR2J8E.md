---
tag: QNZ4PR2J8E
kind: problem
type: answer
answer: (n, k)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=223854
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ and $k$ be positive integers. An $n$-tuple $(a_1, a_2,\ldots , a_n)$ is called a permutation if every number from the set $\{1, 2, . . . , n\}$ occurs in it exactly once. For a permutation $(p_1, p_2, . . . , p_n)$, we define its $k$-mutation to be the $n$-tuple
$$(p_1 + p_{1+k}, p_2 + p_{2+k}, . . . , p_n + p_{n+k}),$$
where indices are taken modulo $n$. Find all pairs $(n, k)$ such that every two distinct permutations have distinct $k$-mutations.

*Remark*: For example, when $(n, k) = (4, 2)$, the $2$-mutation of $(1, 2, 4, 3)$ is $(1 + 4, 2 + 3, 4 + 1, 3 + 2) = (5, 5, 5, 5)$.

*Proposed by Borna Šimić*
