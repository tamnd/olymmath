---
tag: Y7GSASB3X1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2001 Saint Petersburg Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h3059274
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=57309
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=250099
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-spb/2001
    source: hf-ai-mo-aops
    label: 2001 Saint Petersburg Mathematical Olympiad
---
The computer "Intel stump-V" can do only one operation with a number: add 1 to it, then rearrange all the zeros in the decimal representation to the end and rearrenge the left digits in any order. (For example from 1004 you could get 1500 or 5100). The number $12345$ was written on the computer and after performing 400 operations, the number 100000 appeared on the screen. How many times has a number with the last digit 0 appeared on the screen?
