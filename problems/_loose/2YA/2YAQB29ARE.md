---
tag: 2YAQB29ARE
kind: problem
type: answer
answer: "56"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=186173
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine the number of all natural numbers $z$ with the following properties:

(1) The decimal representation of $z$ consists of five pairwise distinct digits.

(2) The first and the last digit in it are different from 0.

(3) If $z^{\prime}$ is the number whose digit representation is obtained from that of $z$ by reversing the order, then the digit representation of the number $z+z^{\prime}$ consists of all identical digits.
