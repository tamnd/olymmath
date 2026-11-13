---
tag: 1QK33JAHGZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: fr
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/France/train/0001.parquet#row=198
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: fr-tst
    source: hf-mathnet
    label: France PRÉPARATION OLYMPIQUE FRANÇAISE DE MATHÉMATIQUES
---
Un graphe $G$ fini simple à $n$ sommets est dit divisible s'il est possible d'attribuer à chaque sommet $s$ de $G$ un numéro $n_{s}$ de sorte que deux sommets distincts possèdent toujours deux numéros distincts et deux sommets quelconques $s$ et $s^{\prime}$ sont reliés par une arête si et seulement si $n_{s} \mid n_{s^{\prime}}$ ou $n_{s^{\prime}} \mid n_{s}$.

Un graphe $G$ fini simple à $n$ sommets est dit permutable s'il est possible de numéroter les sommets de $G$ de $1$ à $n$ et s'il existe une permutation $\sigma$ de $\{1, \ldots, n\}$ telle que les sommets ayant pour numéros $i$ et $j$ sont reliés par une arête si et seulement si $(i-j)(\sigma(i)-\sigma(j))<0$.

Montrer qu'un graphe $G$ est permutable si et seulement si $G$ et son complémentaire sont divisibles.
