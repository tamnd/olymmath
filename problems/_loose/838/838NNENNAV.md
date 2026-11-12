---
tag: 838NNENNAV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2008 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h1927109
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73201
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: pumac/2008
    source: hf-ai-mo-aops
    label: 2008 Princeton University Math Competition
---
Consider the sequence $s_0 = (1, 2008)$ . Define new sequences $s_i$ inductively by inserting the sum of each pair of adjacent terms in $s_{i-1}$ between them - for instance, $s_1 = (1, 2009, 2008)$ . For some $n, s_n$ has exactly one term that appears twice. Find this repeated term.
