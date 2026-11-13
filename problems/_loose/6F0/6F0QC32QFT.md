---
tag: 6F0QC32QFT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2006 Iran Team Selection Test
    url: https://artofproblemsolving.com/community/c6h85676
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44541
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240779
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-tst/2006
    source: hf-ai-mo-aops
    label: 2006 Iran Team Selection Test
---
We have $n$ points in the plane, no three on a line.
We call $k$ of them good if they form a convex polygon and there is no other point in the convex polygon.
Suppose that for a fixed $k$ the number of $k$ good points is $c_k$ .
Show that the following sum is independent of the structure of points and only depends on $n$ :
$$ \sum_{i=3}^n (-1)^i c_i $$
