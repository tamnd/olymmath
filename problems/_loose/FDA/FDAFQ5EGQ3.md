---
tag: FDAFQ5EGQ3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1998 Tournament Of Towns
    url: https://artofproblemsolving.com/community/c6h2097823
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=28462
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=69146
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 1998 Tournament Of Towns
---
Nine numbers are arranged in a square table: $a_1 \,\, a_2 \,\, a_3$ $b_1 \,\, b_2 \,\, b_3$ $c_1\,\, c_2 \,\, c_3$ .
It is known that the six numbers obtained by summing the rows and columns of the table are equal: $a_1 + a_2 + a_3 = b_1 + b_2 + b_3 = c_1 + c_2 + c_3 = a_1 + b_1 + c_1 = a_2 + b_2 + c_2 = a_3 + b_3 + c_3$ .
Prove that the sum of products of numbers in the rows is equal to the sum of products of numbers in the columns: $a_1 b_1 c_1 + a_2 b_2c_2 + a_3b_3c_3 = a_1a_2a_3 + b_1 b_2 b_3 + c_1 c_2c_3$ .

(V Proizvolov)
