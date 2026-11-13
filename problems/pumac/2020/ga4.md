---
tag: D50AQJSYZ6
kind: problem
appearances:
  - at: pumac/2020/ga4
    primary: true
  - at: pumac/2020/gb6
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2020 official paper
    url: https://pumac.princeton.edu/s/2020GeometryA.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2020 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h2747346
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73216
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263137
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $C$ be a circle centered at point $O$ , and let $P$ be a point in the interior of $C$ . Let $Q$ be a point on the circumference of $C$ such that $PQ \perp OP$ , and let $D$ be the circle with diameter $PQ$ . Consider a circle tangent to $C$ whose circumference passes through point $P$ . Let the curve $\Gamma$ be the locus of the centers of all such circles. If the area enclosed by $\Gamma$ is $1/100$ the area of $C$ , then what is the ratio of the area of $C$ to the area of $D$ ?
