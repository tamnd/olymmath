---
tag: 8RRHBN6PNY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2000 IberoAmerican
    url: https://artofproblemsolving.com/community/c6h83793
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=22989
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=224115
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ibero/2000
    source: hf-ai-mo-aops
    label: 2000 IberoAmerican
---
Let $S_1$ and $S_2$ be two circumferences, with centers $O_1$ and $O_2$ respectively, and secants on $M$ and $N$ . The line $t$ is the common tangent to $S_1$ and $S_2$ closer to $M$ . The points $A$ and $B$ are the intersection points of $t$ with $S_1$ and $S_2$ , $C$ is the point such that $BC$ is a diameter of $S_2$ , and $D$ the intersection point of the line $O_1O_2$ with the perpendicular line to $AM$ through $B$ . Show that $M$ , $D$ and $C$ are collinear.
