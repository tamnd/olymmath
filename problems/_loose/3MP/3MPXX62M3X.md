---
tag: 3MPXX62M3X
kind: problem
type: answer
answer: "13"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: de
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Switzerland/train/0000.parquet#row=94
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Sei $A$ eine $m \times m$-Matrix. Sei $X_{i}$ die Menge der Einträge in der $i$-ten Zeile und $Y_{j}$ die Menge der Einträge in der $j$-ten Spalte, $1 \leq i, j \leq m$. $A$ heisst cool, wenn die Mengen $X_{1}, \ldots, X_{m}, Y_{1}, \ldots, Y_{m}$ alle verschieden sind. Bestimme den kleinsten Wert für $n$, sodass eine coole $2005 \times 2005$-Matrix mit Einträgen aus der Menge $\{1,2, \ldots, n\}$ existiert.
