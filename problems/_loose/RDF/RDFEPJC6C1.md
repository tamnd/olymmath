---
tag: RDFEPJC6C1
kind: problem
type: answer
answer: all odd integers between 1 and 2001 inclusive
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: es
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Argentina/train/0000.parquet#row=47
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
Inicialmente en el pizarrón están escritos en una línea y en algún orden todos los números enteros del $1$ al $2002$ inclusive, sin repeticiones.
En cada paso se borran el primero y el segundo número de la línea y se escribe al principio de la línea el valor absoluto de la resta de los dos números que se acaba de borrar; los demás números no se modifican en ese paso, y queda una nueva línea que tiene un número menos que la del paso anterior.
Luego de realizar $2001$ pasos, queda sólo un número en el pizarrón.
Determinar todos los posibles valores del número que queda en el pizarrón al variar el orden de los $2002$ números de la línea inicial (y realizar los $2001$ pasos).
