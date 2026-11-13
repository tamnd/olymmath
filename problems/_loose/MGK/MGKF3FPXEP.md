---
tag: MGKF3FPXEP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2018 Romanian Master of Mathematics Shortlist
    url: https://artofproblemsolving.com/community/c6h1788759
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=27666
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=162286
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Fix integers $n\ge k\ge 2$ . We call a collection of integral valued coins $n-diverse$ if no value occurs in it more than $n$ times. Given such a collection, a number $S$ is $n-reachable$ if that collection contains $n$ coins whose sum of values equals $S$ . Find the least positive integer $D$ such that for any $n$ -diverse collection of $D$ coins there are at least $k$ numbers that are $n$ -reachable.

*Proposed by Alexandar Ivanov, Bulgaria.*
