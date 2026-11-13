---
tag: MC9SKAVEFC
kind: problem
type: answer
answer: Ana wins for starting sizes equal to one, three, or any even number at least four.
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: es
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Spain/train/0001.parquet#row=265
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: es-ome
    source: hf-mathnet
    label: Spain FASE LOCAL DE LA OLIMPIADA MATEMÁTICA ESPAÑOLA.
---
Ana y Bernardo juegan al siguiente juego. Se empieza con una bolsa que contiene $n \geq 1$ piedras. En turnos sucesivos y empezando por Ana, cada jugador puede hacer los siguientes movimientos: si el número de piedras en la bolsa es par, el jugador puede coger una sola piedra o la mitad de las piedras. Si el número de piedras en la bolsa es impar, tiene que coger una sola piedra. El objetivo del juego es coger la última piedra. Determinar para qué valores de $n$ Ana tiene una estrategia ganadora.
