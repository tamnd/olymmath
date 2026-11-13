---
tag: P66WN4YQD8
kind: problem
type: answer
answer: 'For 2004 tokens: impossible. For 2003 tokens: possible.'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: es
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Spain/train/0001.parquet#row=8
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
Colocamos, formando una circunferencia, 2004 fichas bicolores: blancas por una cara y negras por la otra. Un movimiento consiste en elegir una ficha con la cara negra hacia arriba y dar la vuelta a tres fichas: la elegida, la de su derecha, y la de su izquierda. Supongamos que inicialmente hay una sola ficha con la cara negra hacia arriba. ¿Será posible, repitiendo el movimiento descrito, conseguir que todas las fichas tengan la cara blanca hacia arriba? ¿Y si tuviéramos 2003 fichas, entre las cuales exactamente una tiene al comienzo la cara negra hacia arriba?
