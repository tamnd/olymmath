---
tag: BMDQVKRBRE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: es
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Argentina/train/0000.parquet#row=156
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ar-oma/2006
    source: hf-mathnet
    label: Argentina Argentina 2006
---
Sea $k \ge 1$ un entero. En un grupo de $2k+1$ personas algunas son sinceras (siempre dicen la verdad) y las restantes son impredecibles (a veces dicen la verdad y a veces mienten). Se sabe que las impredecibles son a lo sumo $k$. Alguien ajeno al grupo debe determinar quién es sincero y quién impredecible mediante una secuencia de pasos. En cada paso elige dos personas $A$ y $B$ del grupo y le pregunta a $A$ ¿es $B$ sincero?
Demostrar que al cabo de $3k$ pasos el forastero podrá clasificar con certeza a las $2k+1$ personas del grupo.
