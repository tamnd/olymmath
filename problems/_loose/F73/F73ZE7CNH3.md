---
tag: F73ZE7CNH3
kind: problem
type: answer
answer: "5151"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=193004
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Brady is stacking 600 plates in a single stack. Each plate is coloured black, gold or red. Any black plates are always stacked below any gold plates, which are always stacked below any red plates. The total number of black plates is always a multiple of two, the total number of gold plates is always a multiple of three, and the total number of red plates is always a multiple of six. For example, the plates could be stacked with:

- 180 black plates below 300 gold plates below 120 red plates, or
- 450 black plates below 150 red plates, or
- 600 gold plates.

In how many different ways could Brady stack the plates?
(A) 5139
(B) 5142
(C) 5145
(D) 5148
(E) 5151
