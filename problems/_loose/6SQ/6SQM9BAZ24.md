---
tag: 6SQM9BAZ24
kind: problem
type: answer
answer: "7"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=131821
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given sets $A_{1}, A_{2}, \cdots, A_{n}$ are different subsets of the set $\{1,2, \cdots, n\}$, satisfying the following conditions:
( i ) $i \notin A_{i}$ and $\operatorname{Card}\left(A_{i}\right) \geqslant 3, i=1,2, \cdots, n$;
(ii) $i \in A_{j}$ if and only if $j \notin A_{i}(i \neq j$, and $i, j=1,2, \cdots, n)$.
Try to answer the following questions:
(1) Find $\sum_{i=1}^{n} \operatorname{Card}\left(A_{i}\right)$;
(2) Find the minimum value of $n$.
