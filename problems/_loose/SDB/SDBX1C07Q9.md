---
tag: SDBX1C07Q9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Indonesia MO
    url: https://artofproblemsolving.com/community/c6h3145550
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=43596
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240047
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: id-osn/2023
    source: hf-ai-mo-aops
    label: 2023 Indonesia MO
---
Given a triangle $ABC$ with $\angle ACB = 90^{\circ}$ . Let $\omega$ be the circumcircle of triangle $ABC$ . The tangents of $\omega$ at $B$ and $C$ intersect at $P$ . Let $M$ be the midpoint of $PB$ . Line $CM$ intersects $\omega$ at $N$ and line $PN$ intersects $AB$ at $E$ . Point $D$ is on $CM$ such that $ED \parallel BM$ . Show that the circumcircle of $CDE$ is tangent to $\omega$ .
