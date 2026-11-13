---
tag: VN3P57KKFF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2019 Iran MO (3rd Round)
    url: https://artofproblemsolving.com/community/c6h1902541
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=17896
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=219471
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo/2019
    source: hf-ai-mo-aops
    label: 2019 Iran MO (3rd Round)
---
Cells of a $n*n$ square are filled with positive integers in the way that in the intersection of the $i-$ th column and $j-$ th row, the number $i+j$ is written. In every step, we can choose two non-intersecting equal rectangles with one dimension equal to $n$ and swap all the numbers inside these two rectangles with one another. ( without reflection or rotation ) Find the minimum number of moves one should do to reach the position where the intersection of the $i-$ th column and $j-$ row is written $2n+2-i-j$ .
