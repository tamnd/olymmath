---
tag: SQMWJMKSV1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2001 239 Open Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h2115417
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=54791
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=230235
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-239-open/2001
    source: hf-ai-mo-aops
    label: 2001 239 Open Mathematical Olympiad
---
The numbers $1, 2, \dots, 1999$ are written on the board. Two players take turn choosing $a,b$ from the board and erasing them then writing one of $ab$ , $a+b$ , $a-b$ . The first player wants the last number on the board to be divisible by $1999$ , the second player want to stop him. Determine the winner.
