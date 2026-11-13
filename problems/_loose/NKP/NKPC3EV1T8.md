---
tag: NKPC3EV1T8
kind: problem
type: answer
answer: nickel_1,silver_2,bronze_3,platinum_4,gold_5
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=74745
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Five metal pieces, made of gold, silver, bronze, platinum, and nickel respectively, were placed in five safes, numbered from 1 to 5. Each safe contains one piece, and the problem is to figure out which piece is in which safe. On the door of each safe is written a piece of information. Of the five pieces of information, four are false, and the only true one is the one that appears on the door of the safe that contains the gold piece. The information on the doors of the safes is as follows.

Safe 1: The gold is in safe 2 or 3.

Safe 2: The silver is in safe 1.

Safe 3: The bronze is not here.

Safe 4: The nickel is in the safe whose number is one less than the one that contains the gold.

Safe 5: The platinum is in the safe whose number is one more than the one that contains the bronze.
