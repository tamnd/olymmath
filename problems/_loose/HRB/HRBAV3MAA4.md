---
tag: HRBAV3MAA4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=166815
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We have $d$ boxes and an urn. The boxes are numbered from 1 to $d$, and some of them, possibly all, contain balls. Our goal is to collect the contents of the boxes into the urn. The $i$-th box can be emptied if it contains exactly $i$ balls; the emptying process involves placing one ball into the urn and the remaining $(i-1)$ balls, one by one, into the first, second, $\ldots(i-1)$-th boxes.

Place 29 balls into the appropriate boxes so that all of them can be collected into the urn!
