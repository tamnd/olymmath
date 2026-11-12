---
tag: DYRSV391JC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numina-olympiads
    url: https://huggingface.co/datasets/project-numina/olympiads
    capture: hf-numina-olympiads/default/train/0000.parquet#row=1790
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Een groep van 4050 vrienden speelt een videospel-toernooi. Daarvoor staan er 2025 computers in een zaal gelabeld $a_1, \dots, a_{2025}$ en 2025 computers in een andere zaal gelabeld $b_1, \dots, b_{2025}$. De speler op computer $a_i$ speelt altijd tegen de spelers $b_i$, $b_{i+2}$, $b_{i+3}$ en $b_{i+4}$ (in het bijzonder dus juist niet tegen $b_{i+1}$), waarbij we de computers cyclisch doornummeren. Na de eerste ronde kiezen alle spelers een computer binnen hun zaal voor de tweede ronde. Daarna merken ze op dat iedereen in de tweede ronde dezelfde tegenstanders heeft als in de eerste ronde.

Bewijs dat als er iemand dezelfde computer heeft gekozen in beide rondes, dan iedereen dezelfde computer heeft gekozen in beide rondes.
