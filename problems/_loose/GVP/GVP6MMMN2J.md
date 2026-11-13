---
tag: GVP6MMMN2J
kind: problem
type: answer
answer: "131070"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: de
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Austria/train/0000.parquet#row=143
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Anna und Berta spielen ein Spiel, bei dem sie abwechselnd Murmeln vom Tisch nehmen. Anna macht den ersten Zug. Wenn zu Beginn eines Zuges $n \ge 1$ Murmeln am Tisch sind, dann nimmt die Spielerin, die am Zug ist, $k$ Murmeln weg, wobei $k \ge 1$ entweder eine gerade Zahl mit $k \le \frac{n}{2}$ oder eine ungerade Zahl mit $\frac{n}{2} \le k \le n$ ist. Eine Spielerin gewinnt das Spiel, wenn sie die letzte Murmel vom Tisch nimmt.
Man bestimme die kleinste Zahl $N \ge 100 000$, sodass Berta den Sieg erzwingen kann, falls anfangs genau $N$ Murmeln am Tisch liegen.
(Gerhard Woeginger)
