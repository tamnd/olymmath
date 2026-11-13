---
tag: Q8YXBJ9Y2K
kind: problem
type: answer
answer: \lfloor\frac{n+1}{2}\rfloor
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=89592
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On $n$ cards, the following sentences are written:

"At least $k$ sentences to the left of this card are false."

for $k=0,1,2, \ldots, n-1$. The cards are arranged in some order from left to right. What is the maximum number of sentences that can be true?
