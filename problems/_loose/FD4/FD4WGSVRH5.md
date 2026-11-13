---
tag: FD4WGSVRH5
kind: problem
type: answer
answer: "19"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=85520
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Milou has 100 long rectangular envelopes of different formats. Each envelope has a width equal to one of the integers $21, \ldots, 30$ and a height equal to one of the integers $11, \ldots, 20$, and each combination occurs exactly once. Milou wants to sort the envelopes into piles. An envelope can only be placed on another envelope if both the width and the height are smaller than those of the envelope it is placed on. The envelope of size $26 \times 15$ can thus be placed on that of $29 \times 17$, but not on that of $29 \times 15$ or that of $26 \times 17$. What is the smallest number of piles in which Milou can sort the envelopes?
