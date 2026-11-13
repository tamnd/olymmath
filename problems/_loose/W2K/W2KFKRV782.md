---
tag: W2KFKRV782
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2022 Bulgarian Spring Math Competition
    url: https://artofproblemsolving.com/community/c6h2810691
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=61
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=203719
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: bg-spring/2022
    source: hf-ai-mo-aops
    label: 2022 Bulgarian Spring Math Competition
---
14 students attend the IMO training camp. Every student has at least $k$ favourite numbers. The organisers want to give each student a shirt with one of the student's favourite numbers on the back. Determine the least $k$ , such that this is always possible if: $a)$ The students can be arranged in a circle such that every two students sitting next to one another have different numbers. $b)$ $7$ of the students are boys, the rest are girls, and there isn't a boy and a girl with the same number.
