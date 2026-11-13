---
tag: GP7MP7KQKE
kind: problem
type: answer
answer: "1024"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: es
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Argentina/train/0000.parquet#row=141
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: rioplatense
    source: hf-mathnet
    label: Argentina XV Olimpiada Matemática Rioplatense
---
Carlos escribe en el pizarrón, de izquierda a derecha, los 20 números enteros del $1$ al $20$ en algún orden. Luego, debajo del primer número escrito, escribe el producto del primero con el segundo; debajo del segundo número escribe el producto del segundo con el tercero y así sucesivamente, debajo del penúltimo escribe el producto del penúltimo con el último. Obtiene así una nueva lista con $19$ números enteros.

Hace este proceso repetidamente con los nuevos números obtenidos, de modo que en cada línea la cantidad de números se reduce en uno; finalmente, en la última línea, Carlos escribe sólo un número.

Muestre un ordenamiento inicial de los $20$ números de modo que el último número que Carlos escribe sea el menor posible. ¿Cuántos de estos ordenamientos hay?
