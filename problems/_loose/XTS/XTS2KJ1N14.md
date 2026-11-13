---
tag: XTS2KJ1N14
kind: problem
type: answer
answer: Yes, it is possible; the minimum number of rounds is p+1.
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: es
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Spain/train/0001.parquet#row=179
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: es-ome
    source: hf-mathnet
    label: Spain L Olimpiada Matemática Española
---
Consideramos un número primo $p$. Debemos diseñar un torneo de $p$-parchís sujeto a las siguientes reglas.

* En el torneo participan $p^2$ jugadores.
* En cada partida juegan $p$ jugadores.
* El torneo se divide en rondas. Las rondas se dividen en partidas. Cada jugador juega una, o ninguna, partida en cada ronda.
* Al final del torneo cada jugador se ha enfrentado exactamente una vez con cada uno de los otros jugadores.

Determinar si es posible diseñar un torneo así. En caso afirmativo, obtener el mínimo número de rondas que puede tener el torneo.
