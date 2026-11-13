---
tag: XPM4SRXXMP
kind: problem
type: answer
answer: '{11, 22, 33, 44, 55, 66, 77, 88, 99}'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: pt
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Brazil/train/0002.parquet#row=162
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: br-obm
    source: hf-mathnet
    label: Brazil Brazilian Mathematical Olympiad
---
Sejam $a$ e $b$ dois dígitos diferentes de zero não necessariamente diferentes. O número de dois dígitos $\overline{a b}$ é chamado de curioso, se ele for um divisor do número $\overline{b a}$, que é formado pela troca da ordem dos dígitos de $\overline{a b}$. Ache todos os números curiosos.

Observação: O traço sobre os números serve para distinguir o produto $a \cdot b$ do número de dois dígitos $\overline{a b}$.
