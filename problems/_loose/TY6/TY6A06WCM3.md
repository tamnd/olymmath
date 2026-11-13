---
tag: TY6A06WCM3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=165919
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In a two-dimensional coordinate system, a flea, too small to be seen due to the scale of the grid points, is hopping. The flea starts from the origin and every tenth of a minute, it hops by one of the vectors $(99 ; 0),(-1 ; 1),(-1,-1)$, or it does not move at all. We can poison one grid point at every thirtieth and fiftieth second of each minute. If the flea is on one of these points at that moment, or later hops onto a poisoned grid point, it will shout "NYEKK!" in a loud voice and fall silent forever. Can we eliminate the flea?
