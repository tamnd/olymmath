---
tag: FKY1F6CTGT
kind: problem
type: answer
answer: \text{Alex's record contains the same number of numbers as Serge's record.}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=228911
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Alex distributes some cookies into several boxes and records the number of cookies in each box. If the same number appears more than once, it is recorded only once. Serge takes one cookie from each box and puts them on the first plate. Then he takes one cookie from each box that is still non-empty and puts the cookies on the second plate. He continues until all the boxes are empty. Then Serge records the number of cookies on each plate. Again, if the same number appears more than once, it is recorded only once. Prove that Alex's record contains the same number of numbers as Serge's record.
