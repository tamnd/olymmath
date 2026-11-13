---
tag: 5PQ3PVQT9B
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=248299
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $m,n\in \mathbb{Z}_{\ge 1}$ and a rectangular board $m\times n$ sliced by parallel lines to the rectangle's sides into $mn$ unit squares. At moment $t=0$, there is an ant inside every square, positioned exactly in its centre, such that it is oriented towards one of the rectangle's sides. Every second, all the ants move exactly a unit following their current orientation; however, if two ants meet at the centre of a unit square, both of them turn $180^o$ around (the turn happens instantly, without any loss of time) and the next second they continue their motion following their new orientation. If two ants meet at the midpoint of a side of a unit square, they just continue moving, without changing their orientation.\\ \\
Prove that, after finitely many seconds, some ant must fall off the table.\\ \\
*(Oliver Hayman)*
