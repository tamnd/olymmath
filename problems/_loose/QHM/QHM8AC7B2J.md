---
tag: QHM8AC7B2J
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: pt
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Brazil/train/0002.parquet#row=125
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
Os 50 primeiros números naturais atravessarão um corredor que contém 50 portas numeradas de 1 a 50, todas elas inicialmente trancadas. O primeiro a atravessar será o número $1$, o segundo será o número $2$, em seguida o número $3$ e assim por diante, até o número $50$ que será o último a atravessar. Ao atravessar o corredor, o número $n$ carregará consigo as chaves das portas numeradas com múltiplo de $n$. Assim, por exemplo, o número $1$ carregará as chaves de todas as portas, enquanto que o número $2$ carregará somente as chaves das portas com numeração par e o número $25$ carregará somente as chaves das portas numeradas com $25$ e $50$. Durante o seu percurso, cada número usa as chaves que possui para trancar as portas que estiverem abertas e destrancar aquelas que estiverem fechadas.

a) Quais serão as portas destrancadas pelo número $15$?

b) Mostre que, depois do número $50$ ter percorrido o corredor, a porta de número $10$ ficará destrancada enquanto que a porta de número $9$ ficará trancada.

c) Depois do número $50$ ter percorrido o corredor, quais serão as portas destrancadas?
