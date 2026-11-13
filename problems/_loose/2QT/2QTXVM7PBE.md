---
tag: 2QTXVM7PBE
kind: problem
type: answer
answer: "150"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: es
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Argentina/train/0001.parquet#row=193
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
Los números naturales desde $1$ hasta $300$ inclusive se ubican alrededor de una circunferencia. Decimos que un tal ordenamiento es *alternado* si cada número es menor que sus dos vecinos o es mayor que sus dos vecinos. A un par de números vecinos lo llamaremos *par bueno* si al quitar ese par de la circunferencia, los restantes números forman un ordenamiento alternado.

Determinar la menor cantidad posible de pares buenos que puede haber en un ordenamiento alternado de los números del $1$ al $300$ inclusive.
