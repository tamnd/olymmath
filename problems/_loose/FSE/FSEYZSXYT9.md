---
tag: FSEYZSXYT9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=164826
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$A B C$ is a triangular sheet cut out of thin paper, with all its angles being acute. We perform the following folds on the sheet.

1. We fold the $A C$ half-line onto the $A B$ half-line, marking the point $D$ where the fold line intersects the $B C$ side, then we unfold the sheet again.
2. Similarly, we fold $B C$ onto $B A$, marking the point $E$ where the fold line intersects the $A C$ side.
3. We perform a fold through $D$ such that the fold line is perpendicular to $A B$, with the point where the fold line intersects $A B$ being $F$.
4. Similarly, the fold line through $E$ that is perpendicular to $A B$ intersects $A B$ at $G$.

It is to be proven that when the $\triangle C B F$ is folded around $C F$ and the $\triangle C A G$ is folded around $C G$, in their new positions, these two triangles do not have any overlapping points (except for $C$).
