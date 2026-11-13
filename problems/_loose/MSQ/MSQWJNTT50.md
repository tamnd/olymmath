---
tag: MSQWJNTT50
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2017 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h1401641
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=15280
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00002-of-00003.parquet#row=148284
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/2017
    source: hf-ai-mo-aops
    label: 2017 China Team Selection Test
---
An integer $n>1$ is given . Find the smallest positive number $m$ satisfying the following conditions： for any set $\{a,b\}$ $\subset \{1,2,\cdots,2n-1\}$ ,there are non-negative integers $ x, y$ ( not all zero) such that $2n|ax+by$ and $x+y\leq m.$
