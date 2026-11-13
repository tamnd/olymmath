---
tag: XSR9TDMQCR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Soviet_Union/train/0001.parquet#row=1
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian
    source: hf-mathnet
    label: Soviet Union ASU
---
A rectangular box has sides $x < y < z$. Its perimeter is $p = 4(x + y + z)$, its surface area is $s = 2(xy + yz + zx)$ and its main diagonal has length $d = \sqrt{x^2 + y^2 + z^2}$. Show that $3x < (p/4 - \sqrt{d^2 - s/2})$ and $3z > (p/4 + \sqrt{d^2 - s/2})$.
