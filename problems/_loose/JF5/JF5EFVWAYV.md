---
tag: JF5EFVWAYV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=230502
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Belarus/train/0000.parquet#row=150
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: by-mo/2012
    source: hf-mathnet
    label: Belarus Belorusija 2012
---
Ten points are marked in the plane so that no three of them lie on the same straight line. All points are connected with segments.Each of these segments is painted one of the $k$ colors.
For what positive integer $k$ ($1 \le k \le 5$) is it possible to paint the segments so that for any $k$ of the given $10$ points there are $k$ segments with the ends at these $k$ points, all of these segments being painted $k$ different colors ?

(E. Barabanov)
