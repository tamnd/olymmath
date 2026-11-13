---
tag: N9R3JTNVTY
kind: problem
type: answer
answer: All constant nonzero polynomials and all linear polynomials of the form x plus b with any real b.
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: de
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Switzerland/train/0000.parquet#row=355
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
Sei $k \geq 0$ eine ganze Zahl. Bestimme alle reellen Polynome $P$ von $\operatorname{Grad} k$ mit $k$ verschiedenen reellen Nullstellen, sodass für alle Nullstellen $a$ von $P$ gilt:
$$
P(a+1)=1
$$
