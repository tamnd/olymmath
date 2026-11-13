---
tag: YQNG05ZJA7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2014 NIMO Problems
    url: https://artofproblemsolving.com/community/c6h603654
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=11610
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=213567
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: nimo/2014
    source: hf-ai-mo-aops
    label: 2014 NIMO Problems
---
Let $\alpha$ and $\beta$ be nonnegative integers. Suppose the number of strictly increasing sequences of integers $a_0,a_1,\dots,a_{2014}$ satisfying $0 \leq a_m \leq 3m$ is $2^\alpha (2\beta + 1)$ . Find $\alpha$ .

*Proposed by Lewis Chen*
