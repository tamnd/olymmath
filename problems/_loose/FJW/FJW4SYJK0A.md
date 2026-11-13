---
tag: FJW4SYJK0A
kind: problem
type: answer
answer: "1342"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=85979
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We are looking at a sequence of numbers that starts with $27,1,2012, \ldots$. For this sequence of numbers, the following applies. If we add the numbers in positions 1, 2, and 3 in the sequence, we get 2040. The sum of the numbers in positions 2, 3, and 4 is 2039, and the sum of the numbers in positions 3, 4, and 5 is 2038, and so on. Generally, therefore: the numbers in positions $k, k+1$, and $k+2$ together are $2041-k$. What number is in position 2013 in the sequence?
A) -670
B) -669
C) 670
D) 1341
E) 1342
