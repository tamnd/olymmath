---
tag: BZZ5EYGBG0
kind: problem
type: answer
answer: "1170"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: es
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Argentina/train/0000.parquet#row=200
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
En cada casilla de un tablero de $1 \times 2007$ casillas consecutivas hay que escribir un número entero de $1$ a $2007$, sin repetir números. A continuación se consideran los siguientes $2007$ números: el número de la primera casilla de la izquierda; la suma de los números de las dos primeras casillas (desde la izquierda); la suma de los números de las tres primeras casillas; ...; la suma de los números de las $2006$ primeras casillas y la suma de los números de todas las casillas. Por cada uno de estos $2007$ números que tenga resto $5$ en la división por $6$ se gana $1$ peso. ¿Cuál es la máxima cantidad de dinero que se puede ganar?
