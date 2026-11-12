---
tag: 2W0R0CQ1PZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numina-olympiads
    url: https://huggingface.co/datasets/project-numina/olympiads
    capture: hf-numina-olympiads/default/train/0000.parquet#row=1694
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Stekel en Prik spelen een spel op een $m \times n$-bord, waarbij $m$ en $n$ positieve gehele getallen zijn. Ze zijn afwisselend aan de beurt, waarbij Stekel begint. Stekel zet in zijn beurt steeds een pion op een vakje waar nog geen pion staat. Prik doet in zijn beurt hetzelde, maar zijn pion moet altijd komen in een vakje dat met een zijde grenst aan het vakje waar Stekel net in zijn vorige beurt een pion in gezet heeft. Prik wint als het hele bord vol met pionnen staat. Stekel wint als Prik geen pion meer kan zetten in zijn beurt, terwijl er nog wel minstens een leeg vakje op het bord is. Bepaal voor alle paren $(m, n)$ wie er een winnende strategie heeft.
