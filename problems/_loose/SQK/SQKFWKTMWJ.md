---
tag: SQKFWKTMWJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: fr
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/France/train/0000.parquet#row=160
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: fr-tst
    source: hf-mathnet
    label: France Olympiades Françaises de Mathématiques
---
On dispose de 500 emplacements à billes numérotés de 1 à 500 de gauche à droite. Des billes numérotées de 1 à 500 sont posées dans ces emplacements dans le désordre : leurs numéros ne coïncident pas nécessairement avec les numéros des emplacements. (Dans chaque emplacement il y a exactement une bille.) On dit que l'ordre des billes est plutôt croissant si la plus longue sous-suite décroissante des numéros des billes qu'on peut extraire de cet ordre ne dépasse pas 5 éléments. Montrer qu'il existe au plus $5^{1000}$ ordres plutôt croissants.
