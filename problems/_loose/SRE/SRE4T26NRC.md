---
tag: SRE4T26NRC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: Russian TST 2014
    url: https://artofproblemsolving.com/community/c6h3229925
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=57147
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=249967
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-tst/2014
    source: hf-ai-mo-aops
    label: Russian TST 2014
---
On each non-boundary unit segment of an $8\times 8$ chessboard, we write the number of dissections of the board into dominoes in which this segment lies on the border of a domino. What is the last digit of the sum of all the written numbers?
