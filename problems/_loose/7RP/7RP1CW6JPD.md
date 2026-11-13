---
tag: 7RP1CW6JPD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1995 Romania Team Selection Test
    url: https://artofproblemsolving.com/community/c6h303203
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=54413
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=247913
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-tst/1995
    source: hf-ai-mo-aops
    label: 1995 Romania Team Selection Test
---
For each positive integer $ n$ ,define $ f(n)=lcm(1,2,...,n)$ .
(a)Prove that for every $ k$ there exist $ k$ consecutive positive integers on which $ f$ is constant.
(b)Find the maximum possible cardinality of a set of consecutive positive integers on which $ f$ is strictly increasing and find all sets for which this maximum is attained.
