---
tag: EEW2E9RD1P
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2017 Belarusian National Olympiad
    url: https://artofproblemsolving.com/community/c6h1414617
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=15160
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=216912
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
Boris and Eugene are playing the following game : they mark points on the circle in turn. Boris marks the first and paints his point with the white color and Eugene with the black color (no point can be marked twice). As soon as each of them has colored $n$ points any other point on the circle is automatically colored with the color of the nearest marked point (if it doesn't exist, the point remains uncolored). Then Boris and Eugene count the sum of arc length, colored with white and black color respectively. Boy with the greater sum wins.
For all positive integers $n \geq 2$ determine is it possible for one boy to secure his victory. If it's so, then who?
