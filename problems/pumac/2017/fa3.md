---
tag: S58CWFA9F9
kind: problem
appearances:
  - at: pumac/2017/fa3
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2017 official paper
    url: https://pumac.princeton.edu/s/PUMaC2017_Finals_A.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2017 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h1918143
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=15933
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=217628
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Triangle $ABC$ has incenter $I$ . The line through $I$ perpendicular to $AI$ meets the circumcircle of $ABC$ at points $P$ and $Q$ , where $P$ and $B$ are on the same side of $AI$ . Let $X$ be the point such that $PX$ // $CI$ and $QX$ // $BI$ . Show that $P B, QC$ , and $IX$ intersect at a common point.
