---
tag: PZT6RMYMWA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: es
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Spain/train/0001.parquet#row=120
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: es-ome
    source: hf-mathnet
    label: Spain Olimpiada Matemática Española
---
Sean $k$ y $n$ enteros, con $n \ge k \ge 3$. Se consideran $n + 1$ puntos en el plano, no alineados entre sí tres a tres. A cada segmento que une entre sí dos de esos puntos se le asigna un color de entre $k$ colores dados. Se dice que un ángulo es **bicolor** si tiene por vértice uno de los $n + 1$ puntos, y por lados, dos de los segmentos anteriores que sean de distinto color. Demuestra que existe una coloración tal que el número de ángulos bicolores es estrictamente mayor que
$$
n \left\lfloor \frac{n}{k} \right\rfloor^2 \binom{k}{2}
$$
OBSERVACIÓN: Se denota por ⌊t⌋ la parte entera del número real $t$; es decir el mayor entero $n \le t$.
