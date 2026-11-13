---
tag: T9GETGD2SZ
kind: problem
type: answer
answer: (n+1)^{n-1}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: es
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Argentina/train/0000.parquet#row=59
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: rioplatense
    source: hf-mathnet
    label: Argentina XII Olimpiada Matemática Rioplatense
---
Sobre una mesa se tienen $n \geq 2$ bolsas de plástico, todas de diferente color. Cada una de ellas está en contacto con la mesa o está adentro de una de las otras bolsas. La operación permitida es elegir una de las bolsas que está en contacto con la mesa y realizar el siguiente intercambio: todas las bolsas que tenga adentro se ponen en contacto con la mesa, y todas las demás bolsas que están en contacto con la mesa se meten dentro de la bolsa elegida (sin modificar el contenido de ninguna de las bolsas que cambian de lugar). Determine cuántas configuraciones diferentes se pueden obtener utilizando repetidas veces esta operación.

Aclaración: Dos configuraciones se consideran la misma si cada bolsa contiene las mismas bolsas en una y otra configuración.
