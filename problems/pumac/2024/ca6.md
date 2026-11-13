---
tag: HZN6MNBF34
kind: problem
appearances:
  - at: pumac/2024/ca6
    primary: true
  - at: pumac/2024/cb8
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2024 official paper
    url: https://pumac.princeton.edu/s/PUMaC_2024_Combinatorics_A.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2024 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h3450612
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73472
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Ezzie is walking around the perimeter of a regular hexagon. Each vertex of the hexagon has an instruction telling him to move clockwise or counterclockwise around the hexagon. However, when he leaves a vertex the instruction switches from clockwise to counterclockwise on that vertex, or vice versa. We say that a configuration $C$ of Ezzie's position and the instructions on the vertices is *irrepeatable* if, when starting from configuration $C,$ configuration $C$ only appears finitely many more times. Find the number of irrepeatable configurations.
