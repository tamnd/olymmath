---
tag: RERBDG38K6
kind: problem
type: answer
answer: \frac{1}{6}n(n^2 - 7)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220773
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$, $(n \geq 3)$ be a positive integer and the set $A$={$1,2,...,n$}. All the elements of $A$ are randomly arranged in a sequence $(a_1,a_2,...,a_n)$. The pair $(a_i,a_j)$ forms an $inversion$ if $1 \leq i \leq j \leq n$ and $a_i > a_j$. In how many different ways all the elements of the set $A$ can be arranged in a sequence that contains exactly $3$ inversions?
