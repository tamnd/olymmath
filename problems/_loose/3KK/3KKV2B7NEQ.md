---
tag: 3KKV2B7NEQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2013 BMT Spring
    url: https://artofproblemsolving.com/community/c6h2760443
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=69772
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: bmt/2013
    source: hf-ai-mo-aops
    label: 2013 BMT Spring
---
Let $N \ge 1$ be a positive integer and $k$ be an integer such that $1 \le k \le N$ . Define the recurrence $x_n =
\frac{x_{n-1} + x_{n-2} +... + x_{n-N}}{N}$ for $n > N$ and $x_k = 1$ , $x_1 = x_2 = ... = x_{k-1} =x_{k+1} =.. = x_N = 0$ . As $n$ approaches infinity, $x_n$ approaches some value. What is this value?
