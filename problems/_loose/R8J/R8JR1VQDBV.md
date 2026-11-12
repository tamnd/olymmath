---
tag: R8JR1VQDBV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h3287059
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=1629
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/2024
    source: hf-ai-mo-aops
    label: 2024 China Team Selection Test
---
A positive integer is a good number, if its base $10$ representation can be split into at least $5$ sections, each section with a non-zero digit, and after interpreting each section as a positive integer (omitting leading zero digits), they can be split into two groups, such that each group can be reordered to form a geometric sequence (if a group has $1$ or $2$ numbers, it is also a geometric sequence), for example $20240327$ is a good number, since after splitting it as $2|02|403|2|7$ , $2|02|2$ and $403|7$ form two groups of geometric sequences.

If $a>1$ , $m>2$ , $p=1+a+a^2+\dots+a^m$ is a prime, prove that $\frac{10^{p-1}-1}{p}$ is a good number.
