---
tag: TGNPV1ES29
kind: problem
type: answer
answer: "760"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=191408
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The non-negative difference between two numbers $a$ and $b$ is $a-b$ or $b-a$, whichever is greater than or equal to 0 . For example, the non-negative difference between 24 and 64 is 40. In the sequence $88,24,64,40,24, \ldots$, each number after the second is obtained by finding the non-negative difference between the previous 2 numbers. The sum of the first 100 numbers in this sequence is
(A) 496
(B) 760
(C) 752
(D) 776
(E) 405
