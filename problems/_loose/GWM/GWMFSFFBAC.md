---
tag: GWMFSFFBAC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: es
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Argentina/train/0000.parquet#row=172
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: rioplatense
    source: hf-mathnet
    label: Argentina XVI Olimpiada Matemática Rioplatense
---
Se tienen dos tableros $A$ y $B$, ambos de $8 \times 8$.
Juan escribe un número en cada casilla del tablero $A$. Para cada casilla del tablero $A$, Juan suma el número escrito en dicha casilla con la suma de los números escritos en sus casillas vecinas, y luego escribe el resultado en la casilla que ocupa el mismo lugar en el tablero $B$.
Juan le entrega a Esteban el tablero $B$ y lo desafía a reconstruir el tablero $A$.
¿Para qué casillas puede Esteban determinar con certeza el número escrito en el tablero $A$?

Nota: Dos casillas son vecinas si tienen un lado o un vértice en común.
