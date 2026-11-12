---
tag: A2Z4BY77PH
kind: problem
type: answer
answer: S^2_0=S^2_1+S^2_2+S^2_3-2S_1S_2\cos\alpha_{12}-2S_1S_3\cos\alpha_{13}-2S_2S_3\cos\alpha_{23}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=59202
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The Cosine Theorem for a Tetrahedron. The square of the area of each face of a tetrahedron is equal to the sum of the squares of the areas of the other three faces minus twice the pairwise products of the areas of these faces and the cosines of the dihedral angles between them, i.e.,

$$
S^2_0 = S^2_1 + S^2_2 + S^2_3 - 2 S_1 S_2 \cos \alpha_{12} - 2 S_1 S_3 \cos \alpha_{13} - 2 S_2 S_3 \cos \alpha_{23}.
$$
