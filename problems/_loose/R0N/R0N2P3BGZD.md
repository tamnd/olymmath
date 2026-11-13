---
tag: R0N2P3BGZD
kind: problem
type: answer
answer: G=7, R=0, E=1, C=6, V=9, I=4, A=8; the maximal six-digit number is 701161
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/JBMO/train/0000.parquet#row=236
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: jbmo-sl
    source: hf-mathnet
    label: JBMO JBMO Shortlist
---
Decipher the equality
$$
(\overline{V E R}-\overline{I A}):(\overline{G R E}+\overline{E C E})=G^{R^{E}}
$$
assuming that the number $\overline{G R E E C E}$ has a maximum value. It is supposed that each letter corresponds to a unique digit from 0 to 9 and different letters correspond to different digits, and also that all letters $G, E, V$ and $I$ are different from 0. Also, the notation $\overline{a_{n} \ldots a_{1} a_{0}}$ stands for the number $a_{n} \cdot 10^{n}+\cdots+10^{1} \cdot a_{1}+a_{0}$.
