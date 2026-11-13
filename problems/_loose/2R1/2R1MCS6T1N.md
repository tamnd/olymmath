---
tag: 2R1MCS6T1N
kind: problem
type: answer
answer: Yes. The total score of participant k is 357 minus k, for k from 1 to 50.
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: es
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Argentina/train/0000.parquet#row=55
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ar-oma
    source: hf-mathnet
    label: Argentina XIX Olimpíada Matemática Argentina
---
En una competencia de gimnasia deportiva de 50 participantes, cada participante está identificado con un número del 1 al 50. La competencia tiene 13 jueces, y cada uno de ellos ordena a los participantes de mejor a peor, a su criterio. Luego le asigna 1 punto al mejor, 2 al segundo, ..., 50 al último. Resultó que para cada par de participantes $(i, j)$, con $i < j$, hubo exactamente 6 jueces que opinaron que $i$ es mejor que $j$. Esto significa que en las puntuaciones de esos 6 jueces, el número asignado a $i$ es menor que el asignado a $j$, y en las puntuaciones de los restantes 7 jueces el número asignado a $i$ es mayor que el asignado a $j$.
El puntaje definitivo de cada competidor es la suma de los 13 números que le asignaron los jueces. Decidir si con esta información se puede determinar con certeza el puntaje definitivo de cada uno de los 50 competidores.
Si la respuesta es afirmativa, determinar el puntaje definitivo de cada uno de los 50 competidores; si es negativa, explicar el porqué.
