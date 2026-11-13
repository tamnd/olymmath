---
tag: R12HDRTSNE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2022 Rioplatense Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h2982005
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=27632
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=228020
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: rioplatense/2022
    source: hf-ai-mo-aops
    label: 2022 Rioplatense Mathematical Olympiad
---
Let $n \ge 4$ and $k$ be positive integers. We consider $n$ lines in the plane between which there are not two parallel nor three concurrent. In each of the $\frac{n(n-1)}{2}$ points of intersection of these lines, $k$ coins are placed. Ana and Beto play the following game in turns: each player, in turn, chooses one of those points that does not share one of the $n$ lines with the point chosen immediately before by the other player, and removes a coin from that point. Ana starts and can choose any point. The player who cannot make his move loses. Determine based on $n$ and $k$ who has a winning strategy.
