---
tag: C578JRDM7M
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: fr
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/France/train/0000.parquet#row=267
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On dispose de $n$ jetons portant chacun un numéro entier (qui peut être négatif). Si on trouve parmi eux deux jetons portant le même numéro $m$, on les enlève et on met à leur place un jeton portant le numéro $m-1$, et un autre portant le numéro $m+1$. Montrer qu'au bout d'un nombre fini de tels changements, tous les jetons porteront des numéros distincts.
