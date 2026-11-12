---
tag: 3WFT8WT1Z5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numina-olympiads
    url: https://huggingface.co/datasets/project-numina/olympiads
    capture: hf-numina-olympiads/default/train/0000.parquet#row=2219
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Soit p un nombre premier. Martin la grenouille est situé en position 0 sur la droite réelle. A chaque seconde, Martin effectue un mouvement : il peut rester à sa position, faire un saut de 1 sur la droite, ou faire un saut de 1 sur la gauche. Martin souhaite être revenu au bout de $p-1$ mouvements à sa position initiale : il note alors $s_{p}$ le nombre de séquences de $p-1$ mouvements lui permettant de revenir à sa position initiale. Quel est le reste de $s_{p}$ modulo $p$ ?
Par exemple, pour $p=3, s_{p}=3$ puisque Martin peut choisit de rester à sa position deux fois, de faire un saut sur la droite puis sur la gauche, ou faire un saut sur la gauche puis sur la droite.
