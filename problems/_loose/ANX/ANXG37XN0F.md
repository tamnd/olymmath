---
tag: ANXG37XN0F
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2018 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h1620748
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=16823
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=218463
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2018
    source: hf-ai-mo-aops
    label: 2018 Online Math Open Problems
---
A mouse has a wheel of cheese which is cut into $2018$ slices. The mouse also has a $2019$ -sided die, with faces labeled $0,1,2,\ldots, 2018$ , and with each face equally likely to come up. Every second, the mouse rolls the dice. If the dice lands on $k$ , and the mouse has at least $k$ slices of cheese remaining, then the mouse eats $k$ slices of cheese; otherwise, the mouse does nothing. What is the expected number of seconds until all the cheese is gone?

*Proposed by Brandon Wang*
