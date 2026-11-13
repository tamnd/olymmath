---
tag: EBZFB26M3D
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2016 Tournament Of Towns
    url: https://artofproblemsolving.com/community/c6h1215303
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=14842
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=216626
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 2016 Tournament Of Towns
---
$N $ different numbers are written on blackboard and one of these numbers is equal to $0$ .One may take any polynomial such that each of its coefficients is equal to one of written numbers ( there may be some equal coefficients ) and write all its roots on blackboard.After some of these operations all integers between $-2016$ and $2016$ were written on blackboard(and some other numbers maybe). Find the smallest possible value of $N $ .
