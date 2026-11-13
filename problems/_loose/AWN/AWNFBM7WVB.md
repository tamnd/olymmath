---
tag: AWNFBM7WVB
kind: problem
type: answer
answer: a=41, b=45, c=56, d=71
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: pt
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Brazil/train/0002.parquet#row=118
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
Um comerciante recebeu quatro sacos de batatas e deseja medir o peso de cada um deles. Ele sabe que os pesos desses sacos em quilogramas são quantidades inteiras e distintas. Suponha que os pesos dos sacos (em quilogramas) sejam $a, b, c$ e $d$, com $a<b<c<d$.

a) Mostre que, ao pesar os sacos de dois em dois, o maior resultado é $c+d$, e que o segundo maior é $b+d$. Mostre também que o menor resultado é $a+b$ e o segundo menor é $a+c$.

b) A balança do comerciante quebrou. Assim ela só consegue indicar pesos maiores ou iguais do que 100 quilogramas. Ele decide então pesar os sacos de dois em dois realizando assim seis pesagens. Em quatro das pesagens ele obteve como medidas (em quilogramas): 101, 112, 116 e 127. Nas outras duas, ele só conseguiu descobrir que as somas eram menores ou iguais a 100 quilogramas. Encontre os pesos dos quatro sacos.
