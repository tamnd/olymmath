---
tag: QZRMG58G8Q
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2009 Belarusian National Olympiad
    url: https://artofproblemsolving.com/community/c6h1220599
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=31236
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=230682
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: by-mo/2009
    source: hf-ai-mo-aops
    label: 2009 Belarusian National Olympiad
---
Two players are playing the game. On each turn player writes a pair of non-negative integer numbers $(a,b)$ , satisfying the condition that for each written earlier pair $(c,d)$ $a<c$ or $b<d$ . The play who write the pair $(0,0)$ looses. Who of the players wins if he is playing correctly.
