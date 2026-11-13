---
tag: WK65BJ1E9S
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2016 NIMO Problems
    url: https://artofproblemsolving.com/community/c6h1144941
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=14447
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=216241
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: nimo/2016
    source: hf-ai-mo-aops
    label: 2016 NIMO Problems
---
Justin the robot is on a mission to rescue abandoned treasure from a minefield. To do this, he must travel from the point $(0, 0, 0)$ to $(4, 4, 4)$ in three-dimensional space, only taking one-unit steps in the positive $x, y,$ or $z$ -directions. However, the evil David anticipated Justin's arrival, and so he has surreptitiously placed a mine at the point $(2,2,2)$ . If at any point Justin is at most one unit away from this mine (in any direction), the mine detects his presence and explodes, thwarting Justin.

How many paths can Justin take to reach his destination safely?

*Proposed by Justin Stevens*
