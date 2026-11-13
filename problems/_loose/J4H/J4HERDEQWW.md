---
tag: J4HERDEQWW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1992 Romania Team Selection Test
    url: https://artofproblemsolving.com/community/c6h2011186
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=54360
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=247860
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-tst/1992
    source: hf-ai-mo-aops
    label: 1992 Romania Team Selection Test
---
Let $A$ be the set of all ordered sequences $(a_1,a_2,...,a_{11})$ of zeros and ones. The elements of $A$ are ordered as follows: The first element is $(0,0,...,0)$ , and the $n + 1$ -th is obtained from the $n$ -th by changing the first component from the right such that the newly obtained sequence was not obtained before. Find the $1992$ -th term of the ordered set $A$
