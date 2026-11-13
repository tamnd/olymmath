---
tag: SMTYMB3MFT
kind: problem
type: answer
answer: "7"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: es
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Argentina/train/0001.parquet#row=178
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
Un conjunto de números enteros positivos distintos se llama *singular* si, para cada uno de sus elementos, luego de tachar ese elemento, los restantes se pueden agrupar en dos conjuntos sin elementos comunes de modo que la suma de los elementos de los dos grupos sea la misma. Hallar el menor entero positivo $n > 1$ tal que existe un conjunto singular $A$ con $n$ elementos.
