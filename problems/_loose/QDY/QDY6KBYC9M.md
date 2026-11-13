---
tag: QDY6KBYC9M
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=168883
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $P$ be a point inside the tetrahedron $ABCD$, $T_{ABC}, T_{BCD}, T_{ACD}, T_{ABD}$ be the areas of the triangles $ABC, BCD, ACD, ABD$ respectively, and $V$ be the volume of the tetrahedron. Prove that

$$
P A \cdot T_{BCD} + P B \cdot T_{ACD} + P C \cdot T_{ABD} + P D \cdot T_{ABC} \geq 9 V
$$
