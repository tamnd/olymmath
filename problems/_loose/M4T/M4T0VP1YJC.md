---
tag: M4T0VP1YJC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numina-olympiads
    url: https://huggingface.co/datasets/project-numina/olympiads
    capture: hf-numina-olympiads/default/train/0000.parquet#row=2198
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Soit $k \geqslant 1$ un nombre entier.
Considérons 4 k jetons, dont 2 k sont rouges et 2 k sont bleus. Une suite de ces 4 k jetons peut être transformée en une autre suite par un mouvement, consistant à interchanger un certain nombre (éventuellement un seul) de jetons rouges consécutifs avec un nombre égal de jetons bleus consécutifs. Par exemple, un mouvement permet de passer de rbbbrrrb à rrrbrbbb où $r$ désigne un jeton rouge et b désigne un jeton bleu.

Déterminer le plus petit nombre $n$ (comme fonction de $k$ ) tel que, partant de n'importe quelle suite initiale des 4 k jetons, il faut au plus n mouvements pour atteindre l'état dans lequel les 2 k premiers jetons sont rouges.
