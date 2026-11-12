---
tag: W336ZTY9EX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Indonesia MO
    url: https://artofproblemsolving.com/community/c6h3145549
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=43595
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: id-osn/2023
    source: hf-ai-mo-aops
    label: 2023 Indonesia MO
---
Determine the number of permutations $a_1, a_2, \dots, a_n$ of $1, 2, \dots, n$ such that for every positive integer $k$ with $1 \le k \le n$ , there exists an integer $r$ with $0 \le r \le n - k$ which satisfies
$$ 1 + 2 + \dots + k = a_{r+1} + a_{r+2} + \dots + a_{r+k}. $$
