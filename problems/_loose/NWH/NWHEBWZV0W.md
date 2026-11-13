---
tag: NWHEBWZV0W
kind: problem
type: answer
answer: "1"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=106140
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For the number $123456789101112 \cdots 9989991000$, perform the following operation: strike out two adjacent digits $a$ and $b$ ($a$ is before $b$), and then insert the number $a+2b$ at their original position (the first digit of the number can be taken as $b$, and the digit before the number can be taken as $a$). Perform this operation on the resulting number, and continue doing so (for example, performing one operation on the number 118307 can result in the numbers $218307,38307,117307,111407,11837$ or 118314). Prove that using this method, it is possible to eventually obtain 1.
