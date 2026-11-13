---
tag: SEJ4Z6BP6S
kind: problem
type: answer
answer: (n/k) * C(n - k*d + k - 1, k - 1)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: de
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Switzerland/train/0000.parquet#row=424
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Seien $n \geq 4$ und $k, d \geq 2$ natürliche Zahlen mit $k \cdot d \leq n$. Die $n$ Teilnehmenden der MathematikOlympiade sitzen um einen runden Tisch und warten auf Patrick. Als Patrick auftaucht, gefällt ihm die Situation gar nicht, da die Regeln des Social Distancing nicht eingehalten werden. Er wählt also $k$ von den $n$ Teilnehmenden aus, die bleiben dürfen, und schickt alle anderen aus dem Raum, sodass zwischen je zwei der verbleibenden $k$ Teilnehmenden mindestens $d-1$ freie Plätze sind. Wie viele Möglichkeiten hat Patrick dies zu tun, angenommen alle Plätze waren anfangs besetzt?
