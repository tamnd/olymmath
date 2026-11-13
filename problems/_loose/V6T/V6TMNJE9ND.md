---
tag: V6TMNJE9ND
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2001 India IMO Training Camp
    url: https://artofproblemsolving.com/community/c6h6490
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=42180
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=238765
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: in-tst/2001
    source: hf-ai-mo-aops
    label: 2001 India IMO Training Camp
---
Let $ABCD$ be a rectangle, and let $\omega$ be a circular arc passing through the points $A$ and $C$ .
Let $\omega_{1}$ be the circle tangent to the lines $CD$ and $DA$ and to the circle $\omega$ , and lying completely inside the rectangle $ABCD$ .
Similiarly let $\omega_{2}$ be the circle tangent to the lines $AB$ and $BC$ and to the circle $\omega$ , and lying completely inside the rectangle $ABCD$ .
Denote by $r_{1}$ and $r_{2}$ the radii of the circles $\omega_{1}$ and $\omega_{2}$ , respectively, and by $r$ the inradius of triangle $ABC$ .
**(a)** Prove that $r_{1}+r_{2}=2r$ .
**(b)** Prove that one of the two common internal tangents of the two circles $\omega_{1}$ and $\omega_{2}$ is parallel to the line $AC$ and has the length $\left|AB-AC\right|$ .
