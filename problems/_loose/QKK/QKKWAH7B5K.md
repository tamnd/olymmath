---
tag: QKKWAH7B5K
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2012 All-Russian Olympiad
    url: https://artofproblemsolving.com/community/c6h481899
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=7570
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=209639
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian/2012
    source: hf-ai-mo-aops
    label: 2012 All-Russian Olympiad
---
On a circle there are $2n+1$ points, dividing it into equal arcs ( $n\ge 2$ ). Two players take turns to erase one point. If after one player's turn, it turned out that all the triangles formed by the remaining points on the circle were obtuse, then the player wins and the game ends.
Who has a winning strategy: the starting player or his opponent?
