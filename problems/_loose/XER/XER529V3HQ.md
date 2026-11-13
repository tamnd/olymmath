---
tag: XER529V3HQ
kind: problem
type: answer
answer: "1323"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: es
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Argentina/train/0000.parquet#row=204
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ar-oma/2008
    source: hf-mathnet
    label: Argentina Argentina 2008
---
Sobre la mesa hay $21$ cartas, una con cada uno de los números enteros desde $1$ hasta $21$ inclusive.

Xavier selecciona $4$ cartas y se las muestra a Ana. Luego Ana le quita a Xavier una carta (la que ella quiera). Si la suma de los números de las $3$ cartas con las que se quedó Xavier es múltiplo de $3$, gana Ana. Si no, gana Xavier.

Determinar de cuántas maneras puede Xavier elegir las $4$ cartas para estar seguro de ganar, no importa lo bien que juegue Ana.

(Dos elecciones de las mismas $4$ cartas pero en distinto orden se consideran la misma elección.)
