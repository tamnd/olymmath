---
tag: 1YJXBMAMCM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2011 NIMO Problems
    url: https://artofproblemsolving.com/community/c6h425135
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=6913
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=209042
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: nimo/2011
    source: hf-ai-mo-aops
    label: 2011 NIMO Problems
---
Let

$$
N = \sum_{a_1 = 0}^2 \sum_{a_2 = 0}^{a_1} \sum_{a_3 = 0}^{a_2} \dots \sum_{a_{2011} = 0}^{a_{2010}} \left [ \prod_{n=1}^{2011} a_n \right ].
$$

Find the remainder when $N$ is divided by 1000.

*Proposed by Lewis Chen*
