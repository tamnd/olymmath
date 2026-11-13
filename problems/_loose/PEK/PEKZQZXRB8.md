---
tag: PEKZQZXRB8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2011 NIMO Problems
    url: https://artofproblemsolving.com/community/c6h425133
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=6911
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=209040
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
For real $\theta_i$ , $i = 1, 2, \dots, 2011$ , where $\theta_1 = \theta_{2012}$ , find the maximum value of the expression

$$
\sum_{i=1}^{2011} \sin^{2012} \theta_i \cos^{2012} \theta_{i+1}.
$$

*Proposed by Lewis Chen*
