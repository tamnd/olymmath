---
tag: CH6KZNDW62
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numina-olympiads
    url: https://huggingface.co/datasets/project-numina/olympiads
    capture: hf-numina-olympiads/default/train/0000.parquet#row=2193
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Aline et Elsa jouent au jeu suivant. Elles disposent de 100 pierres qu'elles séparent en deux piles (pas forcément de même taille) au début du jeu. Puis chacune à leur tour, en commençant par Aline, elles effectuent le mouvement suivant : elles choisissent une pile, puis un entier strictement positif inférieur ou égal à la moitié de la taille de la pile choisie et retirent ce nombre de pierres de la pile. La première joueuse qui ne peut plus effectuer de mouvement perd.
Déterminer toutes les configurations initiales pour lesquelles Elsa a une stratégie gagnante.
