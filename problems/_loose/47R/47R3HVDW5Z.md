---
tag: 47R3HVDW5Z
kind: problem
type: answer
answer: "No"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: es
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Spain/train/0001.parquet#row=74
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: es-ome
    source: hf-mathnet
    label: Spain XLVII Olimpiada Matemática Española Primera Fase
---
Se ordenan los números naturales en forma de tabla triangular, es decir:
$$
\begin{array}{cccccccc}
& & & 1 & & & \\
& & 2 & 3 & 4 & & \\
& 5 & 6 & 7 & 8 & 9 & \\
10 & 11 & 12 & 13 & 14 & 15 & 16
\end{array}
$$
Diremos que la posición de un número $N$ en la tabla viene dada por dos "coordenadas": el primer número de su fila y el primer número de su columna. Por ejemplo, si $N=15$, su posición es $(10,9)$. Cuando un número $N$, en la posición $(n, m)$, verifica que $N=n+m$ diremos que $N$ está bien colocado en la tabla; así 12 y 14 están bien colocados en la tabla y 15 no lo está. ¿Está $2^{2011}$ bien colocado?
