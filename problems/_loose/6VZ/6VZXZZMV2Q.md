---
tag: 6VZXZZMV2Q
kind: problem
type: answer
answer: "190"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=177680
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the maximal cardinality of a set of phone numbers satisfying the following three conditions:

a) all of them are five-digit numbers (the first digit can be 0 );

b) each phone number contains at most two different digits;

c) the deletion of an arbitrary digit in two arbitrary phone numbers (possibly in different positions) does not lead to identical sequences of digits of length 4 .

Ivan Landjev
