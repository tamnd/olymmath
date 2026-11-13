---
tag: 3TZ54X8SDM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: Kvant 2019
    url: https://artofproblemsolving.com/community/c6h3032427
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=26535
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=227089
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: journal-kvant/2019
    source: hf-ai-mo-aops
    label: Kvant 2019
---
A non-negative integer $n$ is called *redundant* if the sum of all his proper divisors is bigger than $n$ . Prove that for each non-negative integer $N$ there are $N$ consecutive redundant non-negative integers.

*Proposed by V. Bragin*
