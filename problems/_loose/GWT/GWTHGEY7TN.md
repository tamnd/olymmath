---
tag: GWTHGEY7TN
kind: problem
type: answer
answer: The process is finite if and only if n is not a multiple of 5.
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: es
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Spain/train/0001.parquet#row=268
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: es-ome
    source: hf-mathnet
    label: Spain FASE LOCAL DE LA OLIMPIADA MATEMÁTICA ESPAÑOLA.
---
Dado un número natural $n>1$, realizamos la siguiente operación: si $n$ es par, lo dividimos entre dos; si $n$ es impar, le sumamos $5$. Si el número obtenido tras esta operación es $1$, paramos el proceso; en caso contrario, volvemos a aplicar la misma operación, y así sucesivamente. Determinar todos los valores de $n$ para los cuales este proceso es finito, es decir, se llega a $1$ en algún momento.
