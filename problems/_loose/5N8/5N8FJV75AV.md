---
tag: 5N8FJV75AV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: es
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Spain/train/0001.parquet#row=105
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: es-ome
    source: hf-mathnet
    label: Spain Olimpiada Matemática Española
---
Dado un número entero $n$ escrito en el sistema de numeración decimal, formamos el número entero $k$ restando del número formado por las tres últimas cifras de $n$ el número formado por las cifras anteriores restantes. Demostrar que $n$ es divisible por 7, 11 o 13 si y sólo si $k$ también lo es.
