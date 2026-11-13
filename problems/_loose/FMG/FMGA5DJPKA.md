---
tag: FMGA5DJPKA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: es
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Spain/train/0001.parquet#row=138
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Sea $n \ge 3$ un número entero. Se considera una circunferencia en la que se han marcado $n+1$ puntos igualmente espaciados. Cada punto se etiqueta con uno de los números $0, 1, \dots, n$ de manera que cada número se usa exactamente una vez. Dos distribuciones de etiquetas se consideran la misma si una se puede obtener de la otra por una rotación de la circunferencia. Una distribución de etiquetas se llama bonita si, para cualesquiera cuatro etiquetas $a < b < c < d$, con $a + d = b + c$, la cuerda que une los puntos etiquetados $a$ y $d$ no corta la cuerda que une los puntos etiquetados $b$ y $c$. Sea $M$ el número de distribuciones bonitas y $N$ el número de pares ordenados $(x, y)$ de enteros positivos tales que $x + y \le n$ y $\text{mcd}(x, y) = 1$. Demostrar que $M = N + 1$.
