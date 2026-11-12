---
tag: 5Y6GDDCF0E
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2009 Tournament Of Towns
    url: https://artofproblemsolving.com/community/c6h2024478
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=4343
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 2009 Tournament Of Towns
---
For each positive integer $n$ , denote by $O(n)$ its greatest odd divisor. Given any positive integers $x_1 = a$ and $x_2 = b$ , construct an innite sequence of positive integers as follows: $x_n = O(x_{n-1} + x_{n-2})$ , where $n = 3,4,...$ (a) Prove that starting from some place, all terms of the sequence are equal to the same integer.
(b) Express this integer in terms of $a$ and $b$ .
