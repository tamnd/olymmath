---
tag: FGE6KDNTXW
kind: problem
type: answer
answer: (a) 4 purple and 5 blue; (b) 6724 purple
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: pt
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Brazil/train/0002.parquet#row=9
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: br-obm
    source: hf-mathnet
    label: Brazil Brazilian Mathematical Olympiad, Nível 2
---
Num tabuleiro $123 \times 123$, cada casa é pintada de roxo ou azul de acordo com as seguintes condições:
- Cada casa pintada de roxo que não está na borda do tabuleiro tem exatamente 5 casas azuis dentre suas 8 vizinhas.
- Cada casa pintada de azul que não está na borda do tabuleiro tem exatamente 4 casas roxas dentre suas 8 vizinhas.
Nota: Duas casas são vizinhas se possuem um lado ou um vértice em comum.

a) Considere um tabuleiro $3 \times 3$ dentro do tabuleiro $123 \times 123$. Quantas casas de cada cor pode haver neste tabuleiro $3 \times 3$ ?

b) Calcule o número de casas pintadas de roxo no tabuleiro $123 \times 123$.
