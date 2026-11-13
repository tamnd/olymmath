---
tag: MC0QCAGXVX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: es
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Argentina/train/0001.parquet#row=211
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ar-oma
    source: hf-mathnet
    label: Argentina Nacional OMA
---
Sea $n \ge 3$ un entero. Lucas y Matías juegan un juego en un polígono regular de $n$ lados con un vértice marcado como *trampa*. Inicialmente Matías ubica una ficha en un vértice del polígono. En cada paso, Lucas dice un entero positivo y Matías mueve la ficha ese número de vértices en sentido horario o en sentido antihorario, a su elección.

a) Determinar todos los $n \ge 3$ tales que Matías puede ubicar la ficha y moverla de modo de no caer nunca en la trampa, independientemente de los números que diga Lucas. Dar la estrategia para Matías.

b) Determinar todos los $n \ge 3$ tales que Lucas puede obligar a Matías a caer en la trampa. Dar la estrategia para Lucas.
