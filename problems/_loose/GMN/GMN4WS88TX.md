---
tag: GMN4WS88TX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1989 Romania Team Selection Test
    url: https://artofproblemsolving.com/community/c6h2009107
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=54316
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=247816
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-tst/1989
    source: hf-ai-mo-aops
    label: 1989 Romania Team Selection Test
---
Let the sequence ( $a_n$ ) be defined by $a_n = n^6 +5n^4 -12n^2 -36, n \ge 2$ .
(a) Prove that any prime number divides some term in this sequence.
(b) Prove that there is a positive integer not dividing any term in the sequence.
(c) Determine the least $n \ge 2$ for which $1989 | a_n$ .
