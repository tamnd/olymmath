---
tag: K6256RBDJY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2017 NIMO Problems
    url: https://artofproblemsolving.com/community/c6h1311411
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=15803
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=217499
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: nimo/2017
    source: hf-ai-mo-aops
    label: 2017 NIMO Problems
---
Let $S$ be the set of all permutations of $\{1, 2, 3, 4, 5\}$ . For $s = (a_1, a_2,a_3,a_4,a_5) \in S$ , define $\text{nimo}(s)$ to be the sum of all indices $i \in \{1, 2, 3, 4\}$ for which $a_i > a_{i+1}$ . For instance, if $s=(2,3,1,5,4)$ , then $\text{nimo}(s)=2+4=6$ . Compute $$\sum_{s\in S}2^{\text{nimo}(s)}.$$

*Proposed by Mehtaab Sawhney*
