---
tag: S0R7V4ZEST
kind: problem
type: answer
answer: Not possible
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: fr
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/France/train/0000.parquet#row=347
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
On considère un échiquier $3 \times 3$. Au début, on écrit le chiffre $0$ dans chacune des $9$ cases. Ensuite, à chaque étape, on effectue l'opération suivante : on choisit deux cases ayant un côté commun, puis on rajoute $1$ au nombre écrit dans ces deux cases, ou bien on retranche $1$ au nombre écrit dans ces deux cases. Est-il possible d'obtenir une configuration où le nombre $2017$ est écrit dans les $9$ cases?
