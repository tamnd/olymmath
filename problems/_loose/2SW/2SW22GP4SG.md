---
tag: 2SW22GP4SG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numina-olympiads
    url: https://huggingface.co/datasets/project-numina/olympiads
    capture: hf-numina-olympiads/default/train/0000.parquet#row=2118
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Emile a créé un exercice pour Benoît. Il lui annonce qu'il a choisi secrètement un polynôme P unitaire de degré 2023 à coefficients entiers, c'est-à-dire de la forme

$$
P(X)=X^{2023}+a_{2022} X^{2022}+a_{2021} X^{2021}+\ldots+a_{1} X+a_{0}
$$

où $a_{0}, a_{1}, \ldots, a_{2022}$ sont des entiers relatifs. Il donne à Benoît $k$ entiers $n_{1}, n_{2}, \ldots, n_{k}$, où $k$ est un entier positif, ainsi que la valeur du produit $P\left(n_{1}\right) P\left(n_{2}\right) \ldots P\left(n_{k}\right)$. A partir de ces connaissances, Benoît doit essayer de retrouver le polynôme P .
Trouver l'entier $k$ minimal tel que Emile puisse trouver $P$ et $n_{1}, \ldots, n_{k}$ afin de s'assurer que le seul polynôme coincidant avec les informations données à Benoît soit P .
