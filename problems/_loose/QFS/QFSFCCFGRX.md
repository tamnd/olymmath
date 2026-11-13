---
tag: QFSFCCFGRX
kind: problem
type: answer
answer: '1: no; 2: yes; 3: no'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: es
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Spain/train/0001.parquet#row=297
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: es-ome
    source: hf-mathnet
    label: Spain LIX Olimpiada Matemática Española
---
Tenemos un cubo de lado $3$ formado por $27$ piezas cúbicas de lado $1$. Dentro de cada pieza hay una bombilla que puede estar encendida o apagada. Cada vez que se pulsa una pieza (no es posible pulsar la del centro del cubo), cambia el estado de su bombilla y el de las que comparten una cara con la pulsada. Inicialmente, todas las bombillas están apagadas. Responde razonadamente a las siguientes preguntas:

1. ¿Se puede conseguir que todas las bombillas queden encendidas?
2. ¿Se puede conseguir que queden encendidas todas salvo la del centro del cubo?
3. ¿Se puede conseguir que solo quede encendida la del centro del cubo?
