---
tag: Z3NCEZJ2Z6
kind: problem
type: answer
answer: "152"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Mongolia/train/0001.parquet#row=205
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: mn-mo
    source: hf-mathnet
    label: Mongolia Mongolian Mathematical Olympiad
---
Consider a regular polygon with $360$ vertices labeled clockwise from $1$ to $360$. Starting at vertex $1$, count clockwise and remove the $359$th vertex. Continue counting from the next vertex, and remove the subsequent $358$th vertex. Repeat this process, removing the subsequent $357$th vertex, and so on, until only one vertex remains. Determine the label of the last remaining vertex. Note that once a vertex is removed, it is no longer counted.

(Batbayasgalan Balkhuu)
