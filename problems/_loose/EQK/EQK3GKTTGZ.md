---
tag: EQK3GKTTGZ
kind: problem
type: answer
answer: a) 1010, b) 3030
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: es
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Spain/train/0001.parquet#row=283
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: es-ome
    source: hf-mathnet
    label: Spain LVII Olimpiada Matemática Española Concurso Final Nacional
---
Tenemos 2021 colores y 2021 fichas de cada color. Colocamos las $2021^2$ fichas en fila. Se dice que una ficha, $F$, es "mala" si a cada lado de $F$ quedan un número impar de las $2020 \times 2021$ fichas que no comparten color con $F$.
a) Determina cuál es el mínimo número posible de fichas malas.
b) Si se impone la condición de que cada ficha ha de compartir color con al menos una ficha adyacente, ¿cuál es el mínimo número posible de fichas malas?
