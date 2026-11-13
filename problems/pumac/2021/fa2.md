---
tag: K2QK2B2JHD
kind: problem
appearances:
  - at: pumac/2021/fa2
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2021 official paper
    url: https://pumac.princeton.edu/s/PUMaC_2021_Finals_A.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2021 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h2834945
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73330
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263251
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $ABCD$ be a cyclic quadrilateral with circumcircle $\Gamma$ , and let $E$ be the midpoint of the diagonal $BD$ . Let $I_1, I_2, I_3, I_4$ be the centers of the circles inscribed into triangles $\vartriangle ABE$ , $\vartriangle ADE$ , $\vartriangle BCE$ , $\vartriangle CDE$ , in that order. Prove that the circles $AI_1I_2$ and $CI_3I_4$ intersect $\Gamma$ at diametrically opposite points.

Remark: For a circle $C$ and points $X, Y \in C$ , we say that $X$ and $Y$ are diametrically opposite if $XY$ is a diameter of $C$ .
