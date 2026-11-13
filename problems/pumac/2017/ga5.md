---
tag: 56K8QHQA6W
kind: problem
appearances:
  - at: pumac/2017/ga5
    primary: true
  - at: pumac/2017/gb7
canonical:
  statement: S1
  rule: official-original
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
    extraction: native/pdftotext@26.10.0 (claude-opus-5-5)
    confidence: 0.95
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=217604
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Rectangle $HOMF$ has $HO=11$ and $OM=5$. Triangle $ABC$ has orthocenter $H$ and circumcenter $O$. $M$ is the midpoint of $BC$ and altitude $AF$ meets $BC$ at $F$. Find the length of $BC$.
