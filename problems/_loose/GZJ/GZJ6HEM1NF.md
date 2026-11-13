---
tag: GZJ6HEM1NF
kind: problem
type: answer
answer: Bruno tiene estrategia ganadora.
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: es
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Argentina/train/0001.parquet#row=205
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
Juli tiene un mazo de 54 cartas y le propone a Bruno el siguiente juego. Juli ubica las cartas en una fila, algunas boca arriba y las demás boca abajo. Bruno puede hacer repetidas veces el siguiente movimiento: elige una de las cartas y da vuelta esa carta y sus dos vecinas (las que estaban boca arriba las pone boca abajo y las que estaban boca abajo las pone boca arriba). Bruno gana si mediante este procedimiento logra que todas las cartas queden hacia arriba. En caso contrario gana Juli. Decidir cuál jugador tiene estrategia ganadora y explicarla.
