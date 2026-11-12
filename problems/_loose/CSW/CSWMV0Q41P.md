---
tag: CSWMV0Q41P
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 Cono Sur Olympiad
    url: https://artofproblemsolving.com/community/c6h3409331
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=1647
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cono-sur/2024
    source: hf-ai-mo-aops
    label: 2024 Cono Sur Olympiad
---
Let $N$ be a positive integer with $2k$ digits. Its chunks are defined by the two numbers formed by the digits from $1$ to $k$ and $k+1$ to $2k$ (e.g. the chunks of 142856 are 142 and 856). We define the $N$ -*reverse* as the number formed by switching its chunks (e.g. the reverse of 142856 is 856142 and for 1401 it is 114). We call a number *cearense* is it satisfies the following conditions:
[list=i]

- Has an even number of digits

- Its chunks are relatively prime

- Divides its reverse

Find the two smallest cearense integer.
