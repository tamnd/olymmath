---
tag: WAGFKT4SFD
kind: problem
type: answer
answer: All even integers k with 4 ≤ k ≤ 2006
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: es
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Argentina/train/0000.parquet#row=246
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ar-oma/2009
    source: hf-mathnet
    label: Argentina Argentina 2009
---
Fede elige $2008$ enteros positivos tales que la multiplicación de esos $2008$ números termine en $75$, y los escribe en el pizarrón. A continuación Iván, sin ver los números de Fede, elige un entero positivo $k$ menor que $2008$. Si en la lista de Fede hay $k$ números tales que la multiplicación de esos $k$ números termina en $75$, gana Iván. Si no, gana Fede.

Determinar todos los valores de $k$ con los que Iván se asegura la victoria, no importa lo bien que juegue Fede.
