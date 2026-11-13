---
tag: KZ4SYWMAJ8
kind: problem
type: answer
answer: (a) 2, (b) 2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: es
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Italy/train/0000.parquet#row=20
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Una macchina misteriosa contiene una combinazione segreta costituita da 2016 numeri interi $x_{1}, \ldots, x_{2016}$. Sappiamo che tutti i numeri della combinazione sono uguali salvo uno. È possibile interrogare la macchina sottoponendo ad essa una sequenza di 2016 numeri interi $y_{1}, \ldots, y_{2016}$. La macchina risponde rivelando il valore della somma

$$
x_{1} y_{1}+\cdots+x_{2016} y_{2016} \text{.}
$$

Dopo aver risposto alla prima domanda, la macchina accetta una seconda domanda, poi una terza, e così via. Quante domande sono necessarie per determinare la combinazione:
(a) sapendo che il numero diverso è uguale a zero?
(b) non sapendo quale sia il numero diverso?
