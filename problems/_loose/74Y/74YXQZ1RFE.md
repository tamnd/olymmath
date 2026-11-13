---
tag: 74YXQZ1RFE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2014 239 Open Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h2131152
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=54881
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=230325
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-239-open/2014
    source: hf-ai-mo-aops
    label: 2014 239 Open Mathematical Olympiad
---
Two players take turns alternatively and remove a number from $1,2,\dots,1000$ . Players can not remove a number that differ with a number already removed by $1$ also they can not remove a number such that it sums up with another removed number to $1001$ . The player who can not move loses. Determine the winner.
