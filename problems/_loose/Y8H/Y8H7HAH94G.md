---
tag: Y8H7HAH94G
kind: problem
type: answer
answer: ceil((3/4)·n^2 + n) = {3m^2 + 2m if n=2m; 3m^2 + 5m + 2 if n=2m+1}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: es
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Argentina/train/0000.parquet#row=131
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cono-sur
    source: hf-mathnet
    label: Argentina XVII OLIMPIADA MATEMÁTICA DEL CONO SUR
---
Sea $n$ un número natural. La sucesión finita $\alpha$ de enteros positivos tiene, entre sus términos, exactamente $n$ números distintos ($\alpha$ puede tener números repetidos). Además, si a uno cualquiera de sus términos se le resta $1$, se obtiene una sucesión que tiene, entre sus términos, al menos $n$ números positivos distintos. ¿Cuál es el valor mínimo que puede tener la suma de todos los términos de la sucesión $\alpha$?
