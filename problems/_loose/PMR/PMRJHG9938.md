---
tag: PMRJHG9938
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 ELMO Shortlist
    url: https://artofproblemsolving.com/community/c6h3344256
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=69364
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: elmo-sl/2024
    source: hf-ai-mo-aops
    label: 2024 ELMO Shortlist
---
Given a positive integer whose base- $10$ representation is $\overline{d_k\ldots d_0}$ for some integer $k \geq 0$ , where $d_k \neq 0$ , a move consists of selecting some integers $0 \leq i \leq j \leq k$ , such that the digits $d_j,\ldots,d_i$ are not all $0$ , erasing them from $n$ , and replacing them with a divisor of $\overline{d_j\ldots d_i}$ (this divisor need not have the same number of digits as $\overline{d_j\ldots d_i}$ ).

Prove that for all sufficiently large even integers $n$ , we may apply some sequence of moves to $n$ to transform it into $2024$ .

*Allen Wang*
