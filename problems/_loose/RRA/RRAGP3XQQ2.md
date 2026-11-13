---
tag: RRAGP3XQQ2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1957 Moscow Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h2496111
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=56857
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=249754
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-moscow/1957
    source: hf-ai-mo-aops
    label: 1957 Moscow Mathematical Olympiad
---
Represent $1957$ as the sum of $12$ positive integer summands $a_1, a_2, ... , a_{12}$ for which the number $a_1! \cdot a_2! \cdot a_3! \cdot ... \cdot a_{12}!$ is minimal.
