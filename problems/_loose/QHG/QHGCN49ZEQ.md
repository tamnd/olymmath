---
tag: QHGCN49ZEQ
kind: problem
type: answer
answer: 2^{10} - 1 = 1023
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=211343
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
At the top of a piece of paper is written a list of distinctive natural numbers. To continue the list you must choose 2 numbers from the existent ones and write in the list the least common multiple of them, on the condition that it isn't written yet. We can say that the list is closed if there are no other solutions left (for example, the list 2, 3, 4, 6 closes right after we add 12). Which is the maximum numbers which can be written on a list that had closed, if the list had at the beginning 10 numbers?
