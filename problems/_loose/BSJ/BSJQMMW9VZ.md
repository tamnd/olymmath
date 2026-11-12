---
tag: BSJQMMW9VZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numina-olympiads
    url: https://huggingface.co/datasets/project-numina/olympiads
    capture: hf-numina-olympiads/default/train/0000.parquet#row=2639
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Soit $n \geqslant 2$. On trace un circuit sur un échiquier $n \times n$ qui passe exactement une fois par chaque case et revient à son point de départ (deux cases consécutives sur le circuit doivent avoir un côté commun).
Montrer qu'il existe deux cases voisines sur l'échiquier telles que, si on "coupe" le circuit en ces deux cases, les deux chemins obtenus ont pour longueur au moins le quart de la longueur du circuit de départ.

Remarque. La longueur d'un chemin est le nombre de fois où il change de case. En particulier, si le circuit est découpé en deux chemins, la somme des longueurs des deux chemins vaudra toujours $\mathrm{n}^{2}$.
