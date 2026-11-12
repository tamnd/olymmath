---
tag: MPN1CT5SNN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 BMT
    url: https://artofproblemsolving.com/community/c6h3278472
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=70509
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: bmt/2023
    source: hf-ai-mo-aops
    label: 2023 BMT
---
Shiori places seven books, numbered from $1$ to $7$ , on a bookshelf in some order. Later, she discovers that she can place two dividers between the books, separating the books into left, middle, and right sections, such that: $\bullet$ The left section is numbered in increasing order from left to right, or has at most one book. $\bullet$ The middle section is numbered in decreasing order from left to right, or has at most one book. $\bullet$ The right section is numbered in increasing order from left to right, or has at most one book.

In how many possible orderings could Shiori have placed the books? For example, $(2, 3, 5, 4, 1, 6, 7)$ and $(2, 3, 4, 1, 5, 6, 7)$ are possible orderings with the partitions $2, 3, 5|4, 1|6, 7$ and $2, 3, 4|1|5, 6, 7$ , but $(5, 6, 2, 4, 1, 3, 7)$ is not.
