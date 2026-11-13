---
tag: AQTB1YB28D
kind: problem
type: answer
answer: "No"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: fr
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/France/train/0000.parquet#row=270
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On considère un quadrillage formé de tous les petits carrés de côté $1$ entièrement inclus dans le disque donné par l'inéquation $x^{2}+y^{2} \leq 2014^{2}$ dans le plan muni d'un repère orthonormé $Oxy$. À chaque étape du jeu, chaque carré contient le nombre $1$ ou le nombre $-1$. On suppose que chaque case du quadrillage contient un $1$ au début. Un tour consiste à choisir une ligne, une colonne, ou une diagonale (c'est-à-dire un ensemble de cases maximal tel que les centres de ces dernières soient alignés sur une droite formant un angle de $45$ degrés avec l'un des axes de coordonnées) du quadrillage, et à changer les signes du contenu de toutes les cases de celle-ci. Peut-on à la fin avoir un $-1$ dans une case, et des $1$ dans toutes les autres?
