---
tag: X2KP3WDM94
kind: problem
type: answer
answer: 2n + 1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: es
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Argentina/train/0000.parquet#row=21
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: rioplatense
    source: hf-mathnet
    label: Argentina XI Olimpiada Matemática Rioplatense
---
Daniel elige un entero positivo $n$ y se lo dice a Ana. Con esta información, Ana elige un entero positivo $k$ y se lo dice a Daniel. Daniel traza $n$ circunferencias en un papel y elige $k$ puntos distintos con la condición de que cada uno de ellos pertenezca a alguna de las circunferencias que trazó. Luego borra las circunferencias, y sólo quedan visibles los $k$ puntos que marcó. A partir de estos puntos, Ana debe reconstruir por lo menos una de las circunferencias que trazó Daniel. Determinar cuál es el menor valor de $k$ que le permite a Ana lograr su objetivo independientemente de cómo elija Daniel las $n$ circunferencias y los $k$ puntos.
