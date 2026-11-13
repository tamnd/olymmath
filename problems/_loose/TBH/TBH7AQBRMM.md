---
tag: TBH7AQBRMM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2017 Belarusian National Olympiad
    url: https://artofproblemsolving.com/community/c6h1414633
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=15164
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=216916
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: by-mo/2017
    source: hf-ai-mo-aops
    label: 2017 Belarusian National Olympiad
---
In town $N$ the central square hase a shape of rectangle $n \times m$ , composed of squares $1 \times 1$ . In order, to illuminathe the square, lanterns are placed on the corners of the tiles (including the edge of rectangle), such that every lantern illuminates all tiles in corners of which it is placed. Find the minimal amount of lanterns which can be placed, such that every tile will be illuminated even if one of the lanterns burns out.
