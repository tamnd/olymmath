---
tag: TRESJ548CC
kind: problem
type: answer
answer: 2n-3
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=134193
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A town has $n(n \geqslant 3)$ villages, some of which are connected by roads, and each road connects only two villages. Any two villages are connected by at most one road, and there are no crossroads at road intersections, but there are bridges or tunnels. It is known that any two villages can be reached via the roads, but after closing any loop due to a bicycle race, the aforementioned conclusion no longer holds. Find the maximum number of roads.
