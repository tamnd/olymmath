---
tag: 2BNKBEYN6H
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2016 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h1339704
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=14548
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=216342
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2016
    source: hf-ai-mo-aops
    label: 2016 Online Math Open Problems
---
Let $a_1 < a_2 < a_3 < a_4$ be positive integers such that the following conditions hold:

- $\gcd(a_i,a_j)>1$ holds for all integers $1\le i < j\le 4$ .
- $\gcd(a_i,a_j,a_k)=1$ holds for all integers $1\le i < j < k\le 4$ .

Find the smallest possible value of $a_4$ .

*Proposed by James Lin*
