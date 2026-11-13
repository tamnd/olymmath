---
tag: R6XWCJPEAS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=213433
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider increasing integer sequences with elements from $1,\ldots,10^6$. Such a sequence is *Adriatic* if its first element equals 1 and if every element is at least twice the preceding element. A sequence is *Tyrrhenian* if its final element equals $10^6$ and if every element is strictly greater than the sum of all preceding elements.
Decide whether the number of Adriatic sequences is smaller than, equal to, or greater than the number of Tyrrhenian sequences.
(Proposed by Gerhard Woeginger, Austria)
