---
tag: DRWP1NBCMX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: es
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Spain/train/0001.parquet#row=289
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: es-ome
    source: hf-mathnet
    label: Spain LVII Olimpiada Matemática Española Concurso Final Nacional
---
Disponemos de $2n$ bombillas colocadas en dos filas (A y B) y numeradas de 1 a $n$ en cada fila. Algunas (o ninguna) de las bombillas están encendidas y el resto apagadas; decimos que eso es un "estado". Dos estados son distintos si hay una bombilla que está encendida en uno de ellos y apagada en el otro. Diremos que un estado es "bueno" si hay la misma cantidad de bombillas encendidas en la fila A que en la B.
Demuestra que el número total de estados buenos, EB, dividido por el número total de estados, ET, es
$$
\frac{EB}{ET} = \frac{3 \cdot 5 \cdot 7 \cdots (2n-1)}{2^n n!}
$$
