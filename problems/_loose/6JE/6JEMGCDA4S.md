---
tag: 6JEMGCDA4S
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2007 Estonia National Olympiad
    url: https://artofproblemsolving.com/community/c6h217584
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=38802
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=236148
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ee-mo/2007
    source: hf-ai-mo-aops
    label: 2007 Estonia National Olympiad
---
The identifier of a book is an n-tuple of numbers 0, 1, .... , 9, followed by a checksum. The checksum is computed by a fixed rule that satisfies the following property: whenever one increases a single number in the n-tuple (without modifying the other numbers), the checksum also increases. Find the smallest possible number of required checksums if all possible n-tuples are in use.
