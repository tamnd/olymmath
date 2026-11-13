---
tag: YWABK0TN3H
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2010 Vietnam Team Selection Test
    url: https://artofproblemsolving.com/community/c6h373498
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=6026
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=208169
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: vn-tst/2010
    source: hf-ai-mo-aops
    label: 2010 Vietnam Team Selection Test
---
We have $n$ countries. Each country have $m$ persons who live in that country ( $n>m>1$ ). We divide $m \cdot n$ persons into $n$ groups each with $m$ members such that there don't exist two persons in any groups who come from one country.
Prove that one can choose $n$ people into one class such that they come from different groups and different countries.
