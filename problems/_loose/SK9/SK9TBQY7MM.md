---
tag: SK9TBQY7MM
kind: problem
type: answer
answer: 2^{n-1}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=91254
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Cunégonde has $n$ blocks of heights from 1 to $n$ and would like to arrange them, one after the other, so that her cat can move by jumping from one block to the next, from left to right. Her cat can jump from one block to the next if it is either lower or 1 unit higher than the previous block. At the beginning, your cat is placed on the left-hand side of the block.

In how many ways can Cunégonde arrange her blocks so that her cat can cross all the blocks?
