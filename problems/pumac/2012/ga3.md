---
tag: DR066EZCNR
kind: problem
appearances:
  - at: pumac/2012/ga3
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2012 official paper
    url: https://pumac.princeton.edu/s/PUMaC2012_GeometryA.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2012 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h1920905
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=8543
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Six ants are placed on the vertices of a regular hexagon with an area of $12$ . At each point in time, each ant looks at the next ant in the hexagon (in counterclockwise order), and measures the distance, $s$ , to the next ant. Each ant then proceeds towards the next ant at a speed of $\frac{s}{100}$ units per year. After T years, the ants' new positions are the vertices of a new hexagon with an area of $4$ . T is of the form $a \ln b$ , where $b$ is square-free. Find $a + b$ .
