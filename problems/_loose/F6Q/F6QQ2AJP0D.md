---
tag: F6QQ2AJP0D
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2012 Tournament of Towns
    url: https://artofproblemsolving.com/community/c6h2038245
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=28993
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=54501
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 2012 Tournament of Towns
---
Given an infinite sequence of numbers $a_1, a_2, a_3,...$ . For each positive integer $k$ there exists a positive integer $t = t(k)$ such that $a_k = a_{k+t} = a_{k+2t} =...$ . Is this sequence necessarily periodic? That is, does a positive integer $T$ exist such that $a_k = a_{k+T}$ for each positive integer k?
