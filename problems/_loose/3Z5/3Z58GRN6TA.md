---
tag: 3Z58GRN6TA
kind: problem
type: answer
answer: Possible if and only if ab is even
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: fr
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/France/train/0001.parquet#row=407
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On dispose de $a + b$ bols alignés sur une rangée. Les $a$ premiers bols contiennent une pomme tandis que les $b$ derniers bols contiennent une poire.

Une opération consiste à déplacer une pomme du bol $i$ au bol $i+1$ et une poire du bol $j$ au bol $j-1$, où $i$ et $j$ sont deux entiers tels que $i-j$ est pair (un bol peut contenir plusieurs fruits).

On souhaite arriver à la situation finale où les $b$ premiers bols contiennent une poire et les $a$ derniers bols contiennent une pomme. Montrer que c'est possible si et seulement si $ab$ est pair.
