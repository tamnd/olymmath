---
tag: KBXP9WGGY1
kind: problem
appearances:
  - at: pumac/2017/ga6
    primary: true
  - at: pumac/2017/gb8
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2017 official paper
    url: https://pumac.princeton.edu/s/PUMaC2017_Geo_A.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2017 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h1549847
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=15910
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=217605
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Triangle $ABC$ has $\angle{A}=90^{\circ}$ , $AB=2$ , and $AC=4$ . Circle $\omega_1$ has center $C$ and radius $CA$ , while circle $\omega_2$ has center $B$ and radius $BA$ . The two circles intersect at $E$ , different from point $A$ . Point $M$ is on $\omega_2$ and in the interior of $ABC$ , such that $BM$ is parallel to $EC$ . Suppose $EM$ intersects $\omega_1$ at point $K$ and $AM$ intersects $\omega_1$ at point $Z$ . What is the area of quadrilateral $ZEBK$ ?
