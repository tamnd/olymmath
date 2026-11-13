---
tag: 71TEDVFXE2
kind: problem
type: answer
answer: "1598"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: es
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Argentina/train/0000.parquet#row=3
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Los números enteros del $1$ al $2002$, ambos inclusive, se escriben en una pizarra en orden creciente $1$, $2$, $\ldots$, $2001$, $2002$. Luego, se borran los que ocupan el primer lugar, cuarto lugar, séptimo lugar, etc., es decir, los que ocupan los lugares de la forma $3k+1$.
En la nueva lista se borran los números que están en los lugares de la forma $3k+1$. Se repite este proceso hasta que se borran todos los números de la lista. ¿Cuál fue el último número que se borró?
