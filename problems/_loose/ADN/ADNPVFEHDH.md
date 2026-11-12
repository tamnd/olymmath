---
tag: ADNPVFEHDH
kind: problem
type: answer
answer: "2.83"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=10768
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
First group (from 8th grade. 3 points). The sequence consists of 19 ones and 49 zeros, arranged in a random order. We will call a group the maximal subsequence of identical symbols. For example, in the sequence 110001001111 there are five groups: two ones, then three zeros, then one one, then two zeros, and finally four ones. Find the expected value of the length of the first group.
