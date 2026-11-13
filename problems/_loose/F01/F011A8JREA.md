---
tag: F011A8JREA
kind: problem
type: answer
answer: every such configuration contains a monochromatic externally tangent pair if and only if n > 2^k
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: de
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Switzerland/train/0000.parquet#row=195
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Betrachte $n$ kollineare Punkte $P_{1}, \ldots, P_{n}$ und alle Kreise mit Durchmesser $P_{i} P_{j}$ für $1 \leq i<j \leq n$. Jeder dieser Kreise wird mit einer von $k$ Farben gefärbt. Eine solche Menge von gefärbten Kreisen heisst ein $(n, k)$-Gewusel. Eine einfarbige Acht sind zwei Kreise derselben Farbe, die sich äusserlich tangential berühren. Zeige, dass genau dann jedes $(n, k)$-Gewusel eine einfarbige Acht enthält, wenn $n>2^{k}$ gilt.
