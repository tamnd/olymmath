---
tag: S6X4SY1XHN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1998 All-Russian Olympiad
    url: https://artofproblemsolving.com/community/c6h468261
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=55702
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=249087
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian/1998
    source: hf-ai-mo-aops
    label: 1998 All-Russian Olympiad
---
Two distinct positive integers $a,b$ are written on the board. The smaller of them is erased and replaced with the number $\frac{ab}{|a-b|}$ . This process is repeated as long as the two numbers are not equal. Prove that eventually the two numbers on the board will be equal.
