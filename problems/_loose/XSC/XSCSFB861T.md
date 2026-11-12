---
tag: XSCSFB861T
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 27th Philippine MO Area Stage
    url: https://artofproblemsolving.com/community/c6h3487329
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=50785
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ph-pmo
    source: hf-ai-mo-aops
    label: 27th Philippine MO Area Stage
---
Elias initially writes the six-digit number $100000$ on a blackboard. He then chooses a digit, adds $1$ to it, and replaces the previous digit with this. He does this repeatedly, but of course, he replaces a digit only if it is less than $9$ . For example, Elias can generate the following sequence of six-digit numbers: $100000,200000,201000,301000,301001,301002,\dots$ . He stops when he reaches $999999$ .

Determine all prime numbers $p$ for which it is *possible* for Elias to generate a sequence having at least half of the terms divisible by $p$ .
