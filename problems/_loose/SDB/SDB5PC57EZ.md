---
tag: SDB5PC57EZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: es
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Argentina/train/0000.parquet#row=178
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ibero
    source: hf-mathnet
    label: Argentina XXII Olimpiada Iberoamericana de Matemática
---
Dos equipos, $A$ y $B$, disputan el territorio limitado por una circunferencia.
$A$ tiene $n$ banderas azules y $B$ tiene $n$ banderas blancas ($n \ge 2$, fijo). Juegan alternadamente y $A$ comienza el juego. Cada equipo, en su turno, coloca una de sus banderas en un punto de la circunferencia que no se haya usado en una jugada anterior. Cada bandera, una vez colocada, no se puede cambiar de lugar.
Una vez colocadas las $2n$ banderas se reparte el territorio entre los dos equipos. Un punto del territorio es del equipo $A$ si la bandera más próxima a él es azul, y es del equipo $B$ si la bandera más próxima a él es blanca. Si la bandera azul más próxima a un punto está a la misma distancia que la bandera blanca más próxima a ese punto, entonces el punto es neutro (no es de $A$ ni de $B$). Un equipo gana el juego si sus puntos cubren un área mayor que el área cubierta por los puntos del otro equipo. Hay empate si ambos cubren áreas iguales.
Demostrar que, para todo $n$, el equipo $B$ tiene estrategia para ganar el juego.
