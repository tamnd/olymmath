---
tag: 3VDEGDB0S0
kind: problem
type: answer
answer: "1414"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=71097
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider a sequence of words consisting of the letters "A" and "B". The first word in the sequence is "A", and the $k$-th word is obtained from the $(k-1)$-th word by the following operation: each "A" is replaced with "AAB", and each "B" is replaced with "A". It is easy to see that each word is the beginning of the next, thus forming an infinite sequence of letters: AABAAABAABAAABAAB...

a) At what position in this sequence will the 1000-th letter "A" appear?

b) Prove that this sequence is non-periodic.
