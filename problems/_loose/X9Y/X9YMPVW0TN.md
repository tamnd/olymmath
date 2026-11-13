---
tag: X9YMPVW0TN
kind: problem
type: answer
answer: It is possible if and only if 3 divides a·b.
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: es
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Argentina/train/0000.parquet#row=259
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ar-oma/2009
    source: hf-mathnet
    label: Argentina Argentina 2009
---
Se considera un tablero de $a \times b$, con $a$ y $b$ enteros mayores o iguales que $2$. Inicialmente sus casillas están coloreadas de blanco y de negro como un tablero de ajedrez. La operación permitida consiste en elegir dos casillas con un lado común y recolorearlas de la siguiente manera: una casilla blanca pasa a negra; una casilla negra pasa a verde; una casilla verde pasa a blanca.

Determinar para qué valores de $a$ y $b$ es posible, mediante una sucesión de operaciones permitidas, lograr que todas las casillas que inicialmente eran blancas finalicen negras y todas las casillas que inicialmente eran negras finalicen blancas.

**ACLARACIÓN:** Inicialmente no hay casillas verdes, pero estas aparecen luego de la primera operación.
