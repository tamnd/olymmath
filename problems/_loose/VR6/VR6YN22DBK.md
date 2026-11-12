---
tag: VR6YN22DBK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numina-olympiads
    url: https://huggingface.co/datasets/project-numina/olympiads
    capture: hf-numina-olympiads/default/train/0000.parquet#row=2395
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Soit $G$ un graphe à $n$ sommets. Une arête e de $G$ est un cul-de-sac s'il est possible de partitionner $G$ en deux ensembles $A$ et $B$ tels que :

- Il y a au plus 2023 arêtes de G ayant une extrémité dans A et une extrémité dans B.
- L'arête e a l'une de ses extrémités dans $A$ et l'autre dans B.

Montrez qu'il y a au plus 2023( $\mathrm{n}-1$ ) culs-de-sac.
