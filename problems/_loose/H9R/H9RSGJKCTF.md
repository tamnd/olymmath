---
tag: H9RSGJKCTF
kind: problem
type: answer
answer: (m, n) = (1, n) for any positive integer n
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: fr
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/France/train/0000.parquet#row=243
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: fr-tst
    source: hf-mathnet
    label: France Olympiades Françaises de Mathématiques
---
Trouver tous les couples d'entiers positifs $(m, n)$ tels que $1+(m+n) m$ divise $(m+n)(n+1)-1$.
