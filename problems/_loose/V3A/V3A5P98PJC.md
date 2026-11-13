---
tag: V3A5P98PJC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1989 Tournament Of Towns
    url: https://artofproblemsolving.com/community/c6h2477894
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=28075
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=228423
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 1989 Tournament Of Towns
---
The centre of a circle is the origin of $N$ vectors whose ends divide the circle in $N$ equal arcs . Some of the vectors are blue and some are red . We calculate the sum of the angles formed between each pair consisting of a red vector and a blue vector (the angle being measured anticlockwise from red to blue) and divide this sum by the total number of such angles . Prove that the "mean angle" thus obtained is $180^o$ .

(V. P roizvolov)
