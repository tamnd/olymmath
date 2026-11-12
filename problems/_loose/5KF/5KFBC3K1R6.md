---
tag: 5KFBC3K1R6
kind: problem
type: answer
answer: 2n(2n+1)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=37255
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a stack of $2 n+1$ cards, the following two operations are allowed:

a) a part of the cards is taken from the top and placed at the bottom while maintaining the order;

b) the top $n$ cards are inserted into $n$ gaps between the lower $n+1$ cards, maintaining the order.

Prove that using the specified operations, no more than $2 n(2 n+1)$ different arrangements of the cards in the stack can be obtained from the initial arrangement.
