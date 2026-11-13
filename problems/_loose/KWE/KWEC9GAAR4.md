---
tag: KWEC9GAAR4
kind: problem
type: answer
answer: A
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: es
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Argentina/train/0000.parquet#row=125
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cono-sur
    source: hf-mathnet
    label: Argentina XVII OLIMPIADA MATEMÁTICA DEL CONO SUR
---
Dos personas, $A$ y $B$, juegan quitando monedas de una pila que contiene inicialmente $2006$ monedas. Los jugadores juegan por turnos quitando en cada turno de $1$ a $7$ monedas; cada jugador conserva consigo las monedas que ha quitado. Si un jugador lo desea, puede pasar (no quitar monedas en su turno) pero para ello debe pagar $7$ monedas de las que retiró de la pila en turnos anteriores. Estas $7$ monedas se colocan en una caja aparte y ya no intervienen más en el juego. Gana quien retira la última moneda, y $A$ comienza el juego.
Determinar cuál de los dos jugadores puede asegurarse la victoria, no importa cómo juegue el otro. Mostrar una estrategia ganadora y explicar por qué es ganadora.
