---
tag: AC5W4XHWVZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numina-olympiads
    url: https://huggingface.co/datasets/project-numina/olympiads
    capture: hf-numina-olympiads/default/train/0000.parquet#row=2555
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Soit $n \in \mathbb{N}^{*}$. On appelle $S$ l'ensemble des suites de $2 n$ chiffres comportant $n$ zéros et autant de uns. Deux suites de $S$ sont voisines lorsqu'il suffit de changer la position d'un chiffre de l'une pour obtenir l'autre. Par exemple, 11100010 et 10110010 sont voisines puisqu'en décalant le premier 0 de la deuxième suite de deux "pas" vers la droite, on obtient la première suite. Soit $T$ un sous-ensemble dense de cardinal minimal. Montrer que $\frac{1}{n^{2}+1}|S| \leq|T| \leq \frac{1}{n+1}|S|$. Remarque : on note $|A|$ le cardinal de $A$.
