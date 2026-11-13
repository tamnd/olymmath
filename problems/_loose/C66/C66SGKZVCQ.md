---
tag: C66SGKZVCQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2000 All-Russian Olympiad
    url: https://artofproblemsolving.com/community/c6h193458
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=55744
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=249129
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian/2000
    source: hf-ai-mo-aops
    label: 2000 All-Russian Olympiad
---
All points in a $100 \times 100$ array are colored in one of four colors red, green, blue or yellow in such a way that there are $25$ points of each color in each row and in any column. Prove that there are two rows and two columns such that their four intersection points are all in different colors.
