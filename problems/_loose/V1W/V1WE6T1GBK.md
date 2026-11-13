---
tag: V1WE6T1GBK
kind: problem
type: answer
answer: 267, 343, 889, 917, 953
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: es
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Argentina/train/0000.parquet#row=51
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
Consideramos los números naturales $n$ de tres cifras, todas ellas distintas de cero. Diremos que un número $n$ es bueno si el número $n+1$ es múltiplo del número de dos cifras que se obtiene al suprimirle a $n$ la primera cifra de la izquierda (es decir, al suprimirle la cifra de las centenas). Por ejemplo, $123$ NO es bueno, porque $124$ no es múltiplo de $23$.

Hallar todos los números buenos.
