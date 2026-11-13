---
tag: 15NQDBE98X
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2021 All-Russian Olympiad
    url: https://artofproblemsolving.com/community/c6h2534986
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=19813
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=221331
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian/2021
    source: hf-ai-mo-aops
    label: 2021 All-Russian Olympiad
---
A teacher and her 30 students play a game on an infinite cell grid. The teacher starts first, then each of the 30 students makes a move, then the teacher and so on. On one move the person can color one unit segment on the grid. A segment cannot be colored twice. The teacher wins if, after the move of one of the 31 players, there is a $1\times 2$ or $2\times 1$ rectangle , such that each segment from it's border is colored, but the segment between the two adjacent squares isn't colored. Prove that the teacher can win.
