---
tag: 57HKVC44NZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: es
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Argentina/train/0000.parquet#row=207
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: rioplatense
    source: hf-mathnet
    label: Argentina XVII Olimpiada Matemática Rioplatense
---
Dos personas participan en un juego donde hay fichas negras, fichas blancas y dos cajas. El primer jugador pone varias de sus fichas en una de las cajas, y otras varias en otra caja. Está permitido no poner ninguna ficha en una de las cajas y, además, no es obligatorio poner todas las fichas disponibles en las cajas. A continuación el segundo jugador elige una caja y toma todas las fichas de esa caja. De la otra caja, duplica el número de fichas de cada color y se las da al primer jugador, quedando ambas cajas vacías. Por turnos continúan jugando así.

El objetivo del primer jugador es lograr que sus fichas de uno de los colores sean exactamente el doble que sus fichas del otro color (en particular, si se queda sin fichas, gana). Si el primer jugador empieza con $a$ fichas negras y $b$ fichas blancas, ¿para qué valores de $a$ y $b$ el primer jugador puede lograr su objetivo, sin importar la estrategia del segundo jugador?
