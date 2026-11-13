---
tag: VW90K8YMS8
kind: problem
type: answer
answer: "45"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: fr
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/France/train/0000.parquet#row=363
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: fr-tst
    source: hf-mathnet
    label: France OLYMPIADES FRANÇAISES DE MATHÉMATIQUES
---
Soit $S$ l'ensemble des nombres à deux chiffres qui ne contiennent pas le chiffre $0$. Deux nombres de $S$ sont dits amis si leurs plus grands chiffres sont égaux, et si la différence entre leurs plus petits chiffres est égale à $1$. Par exemple, $68$ et $85$ sont amis, $78$ et $88$ sont amis, mais $58$ et $75$ ne sont pas amis.

Déterminer le plus grand entier $m$ tel qu'il existe une partie $T$ de $S$ possédant $m$ éléments, telle que deux éléments quelconques de $T$ ne soient pas amis.
