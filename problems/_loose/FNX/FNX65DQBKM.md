---
tag: FNX65DQBKM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2001 All-Russian Olympiad
    url: https://artofproblemsolving.com/community/c6h455808
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=55780
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=249165
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian/2001
    source: hf-ai-mo-aops
    label: 2001 All-Russian Olympiad
---
Yura put $2001$ coins of $1$ , $2$ or $3$ kopeykas in a row. It turned out that between any two $1$ -kopeyka coins there is at least one coin; between any two $2$ -kopeykas coins there are at least two coins; and between any two $3$ -kopeykas coins there are at least $3$ coins. How many $3$ -koyepkas coins could Yura put?
