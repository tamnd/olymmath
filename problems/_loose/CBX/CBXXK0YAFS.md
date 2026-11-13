---
tag: CBXXK0YAFS
kind: problem
type: answer
answer: "1"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: es
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Argentina/train/0001.parquet#row=194
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ar-oma/2019
    source: hf-mathnet
    label: Argentina Nacional OMA 2019
---
En un tablero de $9 \times 9$ hay que colorear de rojo algunas casillas, por lo menos una. Para cada coloración, sea $P$ la cantidad de casillas, coloreadas o no, que tienen un número par de casillas vecinas rojas. (Dos casillas son vecinas si tienen un lado común.) Dar una coloración del tablero que tenga el menor valor posible de $P$ y demostrar que no puede haber un valor más chico.

ACLARACIÓN: 0 es par.
