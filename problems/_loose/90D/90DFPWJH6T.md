---
tag: 90DFPWJH6T
kind: problem
type: answer
answer: \frac{103}{2520}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=123507
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The rules of a card game are as follows: Arrange nine cards labeled $1,2, \cdots, 9$ in a random row. If the number on the first card (from the left) is $k$, then reverse the order of the first $k$ cards, which is considered one operation. The game stops when no operation can be performed (i.e., the number on the first card is "1"). If a permutation cannot be operated on and is obtained from exactly one other permutation by one operation, it is called a "secondary terminal permutation". Among all possible permutations, find the probability of a secondary terminal permutation occurring.
