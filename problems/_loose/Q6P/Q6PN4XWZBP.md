---
tag: Q6PN4XWZBP
kind: problem
type: answer
answer: "3439"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=92236
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the number of positive integers less than 10000 that contain the digit 1.
 by taking four numbers from $0,1,2, \cdots, 8,9$. But 0000 is not within the range of positive integers, so the number of positive integers less than 10000, according to the multiplication rule, should be $10^{4}-1=9999$.
