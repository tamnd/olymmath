---
tag: Q45P9ZB0QQ
kind: problem
type: answer
answer: "199"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: es
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Argentina/train/0000.parquet#row=86
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ar-oma
    source: hf-mathnet
    label: Argentina XX OLIMPIADA MATEMÁTICA ARGENTINA
---
En el planeta Alfa usan un alfabeto de $100$ letras. Una palabra es una secuencia de letras que satisface las siguientes condiciones:
* No hay dos letras consecutivas iguales. Por ejemplo, BELLEZA no es una palabra, porque tiene LL, y COOPERAR no es una palabra porque tiene OO.
* No hay dos letras distintas $U$ y $V$ que figuren en el orden $UVUV$, ni siquiera si entre cada dos de ellas se intercalan otras letras. Por ejemplo, RESPUESTA no es palabra porque tiene ESES, y CINCUENTA no es palabra porque tiene CNCN.
Determinar la máxima longitud que puede tener una palabra.
