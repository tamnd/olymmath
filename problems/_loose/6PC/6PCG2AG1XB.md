---
tag: 6PCG2AG1XB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numina-olympiads
    url: https://huggingface.co/datasets/project-numina/olympiads
    capture: hf-numina-olympiads/default/train/0000.parquet#row=2687
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On possède une liste infinie de cases, les cases étant numérotées par $1,2, \ldots$. Au départ, toutes les cases contiennent le nombre 1 . À chaque étape, on choisit un nombre $a \in \mathbb{N}^{*}$ tel que:

- soit toutes les cases numérotées par un multiple de a contiennent 1 auquel cas on remplace ces 1 par des 0 ,
- soit toutes les cases numérotées par un multiple de a contiennent 0 auquel cas on remplace ces 0 par des 1 .
Montrer que, pour tout $n \geqslant 2$, on peut faire en sorte que toutes les cases de numéro au plus n contiennent un 0 sauf la première case qui contient un 1.
