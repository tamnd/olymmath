---
tag: 6A1QVPPERR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1999 Tournament Of Towns
    url: https://artofproblemsolving.com/community/c6h2097671
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=28499
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=228533
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 1999 Tournament Of Towns
---
Tireless Thomas and Jeremy construct a sequence. At the beginning there is one positive integer in the sequence. Then they successively write new numbers in the sequence in the following way: Thomas obtains the next number by adding to the previous number one of its (decimal) digits, while Jeremy obtains the next number by subtracting from the previous number one of its digits. Prove that there is a number in this sequence which will be repeated at least $100$ times.

(A Shapovalov)
