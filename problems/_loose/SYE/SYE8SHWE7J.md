---
tag: SYE8SHWE7J
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1999 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h38406
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=35720
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/1999
    source: hf-ai-mo-aops
    label: 1999 China Team Selection Test
---
Let $S = \lbrace 1, 2, \ldots, 15 \rbrace$ . Let $A_1, A_2, \ldots, A_n$ be $n$ subsets of $S$ which satisfy the following conditions:

**I.** $|A_i| = 7, i = 1, 2, \ldots, n$ ;

**II.** $|A_i \cap A_j| \leq 3, 1 \leq i < j \leq n$

**III.** For any 3-element subset $M$ of $S$ , there exists $A_k$ such
that $M \subset A_k$ .

Find the smallest possible value of $n$ .
