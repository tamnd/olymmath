---
tag: WZSPZQC3CP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1998 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h38402
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=35717
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00002-of-00003.parquet#row=149104
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/1998
    source: hf-ai-mo-aops
    label: 1998 China Team Selection Test
---
For any $h = 2^{r}$ ( $r$ is a non-negative integer), find all $k \in \mathbb{N}$ which satisfy the following condition: There exists an odd natural number $m > 1$ and $n \in \mathbb{N}$ , such that $k \mid m^{h} - 1, m \mid n^{\frac{m^{h}-1}{k}} + 1$ .
