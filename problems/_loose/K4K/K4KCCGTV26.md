---
tag: K4KCCGTV26
kind: problem
type: answer
answer: "9"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: es
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Argentina/train/0000.parquet#row=224
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ar-oma/2008
    source: hf-mathnet
    label: Argentina Argentina 2008
---
Se dan 10 números reales $a_1, a_2, ..., a_{10}$, y se forman las 45 sumas de dos de estos números $a_i + a_j$, $1 \le i < j \le 10$. Se sabe que no todas estas sumas son números enteros. Determinar el mínimo valor de $k$ tal que es posible que entre las 45 sumas haya $k$ que no son números enteros y $45 - k$ que son números enteros.
