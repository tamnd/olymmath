---
tag: ZFXJZQSE8Y
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2025 Taiwan TST Round 2
    url: https://artofproblemsolving.com/community/c6h3535501
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=2942
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tw-tst/2025
    source: hf-ai-mo-aops
    label: 2025 Taiwan TST Round 2
---
Let $a_0,a_1,\ldots$ be a sequence of positive integers with $a_0=1$ , $a_1=2$ and
$$a_n = a_{n-1}^{a_{n-1}a_{n-2}}-1$$
for all $n\geq 2$ . Show that if $p$ is a prime less than $2^k$ for some positive integer $k$ , then there exists $n\leq k+1$ such that $p\mid a_n$ .
