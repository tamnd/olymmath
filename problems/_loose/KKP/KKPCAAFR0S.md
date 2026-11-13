---
tag: KKPCAAFR0S
kind: problem
type: answer
answer: 'yellow: 846, blue: 485'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Ukraine/train/0000.parquet#row=155
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ua-umo/2010
    source: hf-mathnet
    label: Ukraine 50th Mathematical Olympiad in Ukraine, Third Round (January 23, 2010)
---
Cube with side length $11$ is partitioned into unit cubes. The external slice of cubes is colored with yellow, the next slice (all cubes that share a vertex with the external slice) is colored with blue. Slice of cubes that touches the previous slice is colored with yellow and so on. Find the number of yellow and blue cubes.
