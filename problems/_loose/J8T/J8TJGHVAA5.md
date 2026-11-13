---
tag: J8TJGHVAA5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: de
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Switzerland/train/0000.parquet#row=370
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ch-smo
    source: hf-mathnet
    label: Switzerland SMO-Selektion
---
Sei $n$ eine natürliche Zahl. Wir nennen eine Sequenz bestehend aus $3 n$ Buchstaben rumänisch, falls die Buchstaben $I, M$ und $O$ alle genau $n$ Mal vorkommen. Ein swap ist eine Vertauschung von zwei benachbarten Buchstaben. Zeige, dass für jede rumänische Sequenz $X$ eine rumänische Sequenz $Y$ existiert, sodass mindestens $\frac{3 n^{2}}{2}$ swaps nötig sind, um die Sequenz $Y$ aus der Sequenz $X$ zu erhalten.
