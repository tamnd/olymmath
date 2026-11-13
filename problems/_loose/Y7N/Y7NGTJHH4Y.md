---
tag: Y7NGTJHH4Y
kind: problem
type: answer
answer: 'Minimum districts A wins: 20. Maximum districts C could win: 39.'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: es
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Argentina/train/0000.parquet#row=205
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ar-oma/2008
    source: hf-mathnet
    label: Argentina Argentina 2008
---
En un país hay $100$ distritos electorales, todos con la misma cantidad de votantes. Cada distrito elige un diputado para el parlamento nacional entre $3$ candidatos que representan a los $3$ partidos políticos $A$, $B$ y $C$. A nivel nacional, los partidos $A$, $B$ y $C$ tienen la adhesión de exactamente $60\%$, $30\%$ y $10\%$ de los votantes, pero la distribución de los adherentes por distrito puede ser arbitraria.

Las elecciones son en dos vueltas. Si en un distrito en la primera vuelta uno de los tres candidatos obtiene más de la mitad de los votos, gana la elección y no hay segunda vuelta. Si no, los dos candidatos con más votos compiten en la segunda vuelta, donde de nuevo gana el que obtiene más de la mitad de los votos.

Cada votante vota por el candidato de su partido favorito. Si en la segunda vuelta no está ese candidato, los votantes de $A$, $B$ y $C$ votan por los candidatos de $C$, $C$ y $B$, respectivamente.

¿Cuál es el mínimo número de distritos que gana el partido $A$? ¿Cuál es el máximo número de distritos que podría ganar $C$?

**ACLARACIÓN:** Suponer que en ningún distrito hay un candidato que obtenga exactamente el $50\%$ de los votos, y tampoco candidatos con la misma cantidad de votos.
