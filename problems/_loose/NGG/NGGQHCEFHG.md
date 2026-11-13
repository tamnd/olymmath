---
tag: NGGQHCEFHG
kind: problem
type: answer
answer: All integers from 22 to 29 inclusive
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: es
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Argentina/train/0001.parquet#row=210
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ar-oma
    source: hf-mathnet
    label: Argentina Nacional OMA
---
En el pizarrón hay dibujado un polígono de ocho lados. Mili debe escribir un número entero entre $1$ y $16$, sin repeticiones, en cada uno de sus lados y en cada uno de sus vértices. A continuación, para cada lado, Mili calcula la suma de los números escritos en sus dos vértices más el número escrito en ese lado. Obtiene así $8$ resultados. El objetivo es que esos $8$ resultados sean iguales entre sí. Denominamos $S$ al número igual al resultado de las $8$ sumas. Determinar todos los posibles valores de $S$ y para el menor de ellos, dar una distribución de $16$ números en el polígono con los que se obtiene ese valor de $S$.
