---
tag: RRDVQFEMR3
kind: problem
type: answer
answer: "4"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: es
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Argentina/train/0000.parquet#row=41
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Cada casilla de un tablero de $3 \times 3$ contiene un botón luminoso que puede estar apagado o prendido. Al apretar el botón del centro cambia el estado de sus ocho vecinos pero no de él mismo. Al apretar cualquier otro botón cambia su estado y el de cada botón vecino.

Apretar un botón se cuenta como un paso.

Dos configuraciones están conectadas si se puede pasar de una a otra en un número finito de pasos.

Se define distancia entre dos configuraciones conectadas como el mínimo número de pasos que son necesarios para pasar de una a la otra.

Determine la máxima distancia que puede haber entre dos configuraciones conectadas.
