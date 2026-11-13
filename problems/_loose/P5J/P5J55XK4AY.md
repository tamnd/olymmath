---
tag: P5J55XK4AY
kind: problem
type: answer
answer: All even positive integers n
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: fr
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/France/train/0001.parquet#row=18
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: fr-tst
    source: hf-mathnet
    label: France Préparation Olympique Française de Mathématiques
---
Un pays comprend $2018 n+1$ villes, où $n$ est un entier naturel non nul. Certaines paires de villes sont reliées par des lignes directes de chemin de fer, de sorte qu'il y ait au plus une ligne entre deux villes ; chaque ligne va dans les deux sens. La distance entre deux villes $A$ et $B$ est alors le nombre minimal de lignes à prendre pour aller de $A$ à $B$.

Trouver l'ensemble des entiers $n$ pour lesquels il possible de construire un réseau ferré respectant le critère suivant:

Pour toute ville $C$ et pour tout $i \in \{1,2, \ldots, 2018\}$, il y a exactement $n$ villes à distance $i$ de $C$.
