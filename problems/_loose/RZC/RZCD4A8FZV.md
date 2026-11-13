---
tag: RZCD4A8FZV
kind: problem
type: answer
answer: C(m+n, m) / p
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: es
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Argentina/train/0000.parquet#row=85
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Sean $m$, $n$ enteros positivos. En un tablero de $m+n$ cuadrículado en cuadrados de $1 \times 1$, consideramos todos los caminos que van del vértice superior derecho al inferior izquierdo, recorriendo líneas de la cuadrícula exclusivamente en las direcciones $\leftarrow$ y $\downarrow$.

Se define el área de un camino como la cantidad de cuadrados del tablero que hay por debajo de ese camino. Si $p$ es un primo tal que $r_p(m) + r_p(n) \ge p$, donde $r_p(m)$ denota el resto de dividir $m$ por $p$ y $r_p(n)$ denota el resto de dividir $n$ por $p$.

¿Cuántos caminos tienen área múltiplo de $p$?
