---
tag: 8WZWW2ZE65
kind: problem
type: answer
answer: Yes, it is always possible to obtain all ones.
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: es
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Argentina/train/0000.parquet#row=148
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: rioplatense
    source: hf-mathnet
    label: Argentina XV Olimpiada Matemática Rioplatense
---
Consideramos en el plano una cantidad finita de rectas tales que no hay dos paralelas ni tres concurrentes. Estas rectas dividen al plano en regiones finitas e infinitas. En cada región finita se escribe un número $1$ o un número $-1$. La operación permitida consiste en elegir un triángulo cualquiera formado por tres de las rectas consideradas (este triángulo puede ser atravesado por otras de las rectas consideradas), y multiplicar por $-1$ todos los números contenidos en este triángulo.
Determinar si siempre es posible, mediante operaciones de este tipo, obtener un número $1$ en todas las regiones, no importa cuál sea la distribución inicial de los números $1$ y $-1$.
