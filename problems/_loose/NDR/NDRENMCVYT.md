---
tag: NDRENMCVYT
kind: problem
type: answer
answer: "2"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=161375
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On a square grid $2012 \times 2012$, a fly and $k$ spiders are located. A move consists of the following: the fly moves to an adjacent vertex or stays in the same place, and then each of the $k$ spiders moves to an adjacent vertex or stays in the same place (multiple spiders can be in the same vertex). At any moment, each spider and the fly can see the positions of the others.

a) Find the smallest $k$ such that the spiders can catch the fly in a finite number of moves, regardless of the initial positions of the fly and the spiders.

b) Answer the same question for a cubic grid $2012 \times 2012 \times 2012$.

(Vertices are adjacent if they differ in exactly one coordinate by 1. A spider catches the fly if they are in the same vertex.)

(Nikola Milosavljević)

Time for work 270 minutes.
