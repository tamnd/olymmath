---
tag: BH8Z6T8HBD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Saint Petersburg Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h3132904
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=57486
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=250276
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-spb/2023
    source: hf-ai-mo-aops
    label: 2023 Saint Petersburg Mathematical Olympiad
---
One side of a square sheet of paper is colored red, the other - in blue. On both sides, the sheet is divided into $n^2$ identical square cells. In each of these $2n^2$ cells is written a number from $1$ to $k$ . Find the smallest $k$ ,for which the following properties hold simultaneously:
(i) on the red side, any two numbers in different rows are distinct;
(ii) on the blue side, any two numbers in different columns are different;
(iii) for each of the $n^2$ squares of the partition, the number on the blue side is not equal to the number on the red side.
