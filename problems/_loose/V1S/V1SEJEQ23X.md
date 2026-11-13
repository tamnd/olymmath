---
tag: V1SEJEQ23X
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=111859
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In the tetrahedron $ABCD$, $\angle BDC$ is a right angle, and the foot of the perpendicular from $D$ to the plane of $\triangle ABC$ is the orthocenter $H$ of $\triangle ABC$. Prove: $(AB + BC + CA)^2 \leqslant 6(AD^2 + BD^2 + CD^2)$. (IMO - 12 Problem)

Example 9 If $a$, $b$, $c$ are the lengths of three edges of a tetrahedron meeting at a vertex, $\alpha$, $\beta$, $\gamma$ are the dihedral angles between these edges, and $\omega$ is half the sum of these dihedral angles, then the volume of the tetrahedron is:
$$
V_{\text {tetrahedron}}=\frac{1}{3} a b c \cdot \sqrt{\sin \omega \cdot \sin (\omega-\alpha) \cdot \sin (\omega-\beta) \cdot \sin (\omega-\gamma)}.
$$
