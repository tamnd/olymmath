---
tag: 2EWGWHHZYW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2010 Vietnam Team Selection Test
    url: https://artofproblemsolving.com/community/c6h373500
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=6028
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=208171
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
We call a rectangle of the size $1 \times 2$ a domino. Rectangle of the $2 \times 3$ removing two opposite (under center of rectangle) corners we call tetramino. These figures can be rotated.

It requires to tile rectangle of size $2008 \times 2010$ by using dominoes and tetraminoes. What is the minimal number of dominoes should be used?
