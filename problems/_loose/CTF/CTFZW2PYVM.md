---
tag: CTFZW2PYVM
kind: problem
type: answer
answer: Both players can force a tie.
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: es
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Mexico/train/0000.parquet#row=3
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Ana y Benito juegan a un juego que consta de 2020 rondas. Inicialmente, en la mesa hay 2020 cartas, numeradas de 1 a 2020, y Ana tiene una carta adicional con el número 0. En la ronda $k$-ésima, el jugador que no tiene la carta $k-1$ decide si toma la carta $k$ o si se la entrega al otro jugador. El número de cada carta indica su valor en puntos. Al terminar el juego, gana quien tiene más puntos. Determina qué jugador tiene estrategia ganadora, o si ambos jugadores pueden forzar el empate, y describe la estrategia a seguir.
