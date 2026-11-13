---
tag: V6BH9SP2Y5
kind: problem
type: answer
answer: 2^{n-3} (5n^2 + 5n + 2)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=210107
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $S$ be the set $\{1, 2, ..., 10\}$. Let $A$ be a subset of $S$.
We arrange the elements of $A$ in increasing order, that is, $A = \{a_1, a_2, ...., a_k\}$ with $a_1 < a_2 < ... < a_k$.
Define *WSUM * for this subset as $3(a_1 + a_3 +..) + 2(a_2 + a_4 +...)$ where the first term contains the odd numbered terms and the second the even numbered terms.
(For example, if $A = \{2, 5, 7, 8\}$, *WSUM * is $3(2 + 7) + 2(5 + 8)$.)
Find the sum of *WSUMs* over all the subsets of S.
(Assume that WSUM for the null set is $0$.)
