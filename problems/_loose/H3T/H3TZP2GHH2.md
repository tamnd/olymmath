---
tag: H3TZP2GHH2
kind: problem
type: answer
answer: 3^25 + 1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: es
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Argentina/train/0000.parquet#row=24
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
En la pantalla de la computadora hay inicialmente escritos dos $1$. El programa *insertar* hace que al apretar la tecla *Enter* se inserte entre cada par de números la suma de esos números.
En el primer paso se inserta un número y obtenemos $1$-$2$-$1$; en el segundo paso se insertan dos números y tenemos $1$-$3$-$2$-$3$-$1$; en el tercero se insertan cuatro números y se tiene $1$-$4$-$3$-$5$-$2$-$5$-$3$-$4$-$1$; etc. Hallar la suma de todos los números que figuran en la pantalla al finalizar el paso número $25$.
