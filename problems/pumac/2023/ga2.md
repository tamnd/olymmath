---
tag: VG5XYSYYRG
kind: problem
appearances:
  - at: pumac/2023/ga2
    primary: true
  - at: pumac/2023/gb4
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2023 official paper
    url: https://pumac.princeton.edu/s/Geometry_A_2023.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h3202249
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73396
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=268556
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\triangle{ABC}$ be an isosceles triangle with $AB = AC =\sqrt{7}, BC=1$ . Let $G$ be the centroid of $\triangle{ABC}$ . Given $ j\in \{0,1,2\}$ , let $T_{j}$ denote the triangle obtained by rotating $\triangle{ABC}$ about $G$ by $\frac{2\pi j}{3}$ radians. Let $\mathcal{P}$ denote the intersection of the interiors of triangles $T_0,T_1,T_2$ . If $K$ denotes the area of $\mathcal{P}$ , then $K^2=\frac{a}{b}$ for relatively prime positive integers $a, b$ . Find $a + b$ .
