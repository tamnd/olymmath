---
tag: R5C337TVAY
kind: problem
type: answer
answer: 2n-1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=139586
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n \in \mathbf{N}^{*}, S=\{1,2, \cdots, 2 n\}$ have $k$ subsets $A_{1}, A_{2}, \cdots, A_{k}$ satisfying:
(1) For any $i \neq j(i, j \in\{1,2, \cdots, k\}), A_{i} \cap A_{j}$ has exactly an odd number of elements;
(2) For any $i(i=1,2, \cdots, k)$, $i \notin A_{i}$;
(3) If $i \in A_{j}$, then $j \in A_{i}$.

Determine the maximum value of $k$.
