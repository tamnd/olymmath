---
tag: 8SSKD9JK94
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2008 All-Russian Olympiad
    url: https://artofproblemsolving.com/community/c6h209598
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=55904
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=249305
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian/2008
    source: hf-ai-mo-aops
    label: 2008 All-Russian Olympiad
---
The columns of an $ n\times n$ board are labeled $ 1$ to $ n$ . The numbers $ 1,2,...,n$ are arranged in the board so that the numbers in each row and column are pairwise different. We call a cell "good" if the number in it is greater than the label of its column. For which $ n$ is there an arrangement in which each row contains equally many good cells?
