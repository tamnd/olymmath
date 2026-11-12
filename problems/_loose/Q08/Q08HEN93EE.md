---
tag: Q08HEN93EE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2025 Taiwan TST Round 1
    url: https://artofproblemsolving.com/community/c6h3521716
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=2939
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tw-tst/2025
    source: hf-ai-mo-aops
    label: 2025 Taiwan TST Round 1
---
Let $k$ be a positive integer. A positive integer $n$ is called a $k$ -good number if it satisfies
the following two conditions:

1. $n$ has exactly $2k$ digits in decimal representation (it cannot have leading zeros).

2. If the first $k$ digits and the last $k$ digits of $n$ are considered as two separate $k$ -digit
numbers (which may have leading zeros), the square of their sum is equal to $n$ .

For example, $2025$ is a $2$ -good number because
$$(20 + 25)^2 = 2025.$$
Find all $3$ -good numbers.
