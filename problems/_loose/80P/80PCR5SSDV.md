---
tag: 80PCR5SSDV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2016 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h1339721
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=14563
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=216357
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
For a positive integer $k$ , define the sequence $\{a_n\}_{n\ge 0}$ such that $a_0=1$ and for all positive integers $n$ , $a_n$ is the smallest positive integer greater than $a_{n-1}$ for which $a_n\equiv ka_{n-1}\pmod {2017}$ . What is the number of positive integers $1\le k\le 2016$ for which $a_{2016}=1+\binom{2017}{2}?$ *Proposed by James Lin*
