---
tag: RNXEA4KZFN
kind: problem
type: answer
answer: "24"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: pt
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Brazil/train/0000.parquet#row=90
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: br-obm
    source: hf-mathnet
    label: Brazil
---
No seguinte tabuleiro $4 \times 4$ devem ser colocados 4 torres, 4 cavalos, 4 bispos e 4 peões de modo que em cada linha e em cada coluna as peças colocadas sejam distintas, como no exemplo:

| $B$ | $T$ | $P$ | $C$ |
| :--- | :--- | :--- | :--- |
| $P$ | $B$ | $C$ | $T$ |
| $T$ | $C$ | $B$ | $P$ |
| $C$ | $P$ | $T$ | $B$ |

Os peões são rebeldes e decidiram ficar nas seguintes posições:

| | | $P$ | |
| :--- | :--- | :--- | :--- |
| $P$ | | | |
| | | | $P$ |
| | $P$ | | |

Calcule o número de modos em que as outras peças podem ser colocadas.
