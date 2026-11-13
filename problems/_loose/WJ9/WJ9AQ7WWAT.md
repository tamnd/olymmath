---
tag: WJ9AQ7WWAT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Iran MO (3rd Round)
    url: https://artofproblemsolving.com/community/c6h3137815
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44460
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240734
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo/2023
    source: hf-ai-mo-aops
    label: 2023 Iran MO (3rd Round)
---
Let $n$ and $a \leq n$ be two positive integers. There's $2n$ people sitting around a circle reqularly. Two people are friend iff one of their distance in the circle is $a$ (that is , $a-1$ people are between them). Find all integers $a$ in terms of $n$ st we can choose $n$ of these people , no two of them positioned in front of each other(means they're not antipodes of each other in the circle) and the total friendship between them is an odd number.
