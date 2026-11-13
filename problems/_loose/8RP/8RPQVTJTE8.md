---
tag: 8RPQVTJTE8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1982 Tournament Of Towns
    url: https://artofproblemsolving.com/community/c6h1898289
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=27882
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=228231
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 1982 Tournament Of Towns
---
In a certain country there are more than $101$ towns. The capital of this country is connected by direct air routes with $100$ towns, and each town, except for the capital, is connected by direct air routes with $10$ towns (if $A$ is connected with $B, B$ is connected with $A$ ). It is known that from any town it is possible to travel by air to any other town (possibly via other towns). Prove that it is possible to close down half of the air routes connected with the capital, and preserve the capability of travelling from any town to any other town within the country.

(IS Rubanov)
