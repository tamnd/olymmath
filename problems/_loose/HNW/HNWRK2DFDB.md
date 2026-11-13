---
tag: HNWRK2DFDB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2022 Romania EGMO TST
    url: https://artofproblemsolving.com/community/c6h2781229
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=399
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204074
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-egmo-tst/2022
    source: hf-ai-mo-aops
    label: 2022 Romania EGMO TST
---
On a board there is a regular polygon $A_1A_2\ldots A_{99}.$ Ana and Barbu alternatively occupy empty vertices of the polygon and write down triangles on a list: Ana only writes obtuse triangles, while Barbu only writes acute ones.

At the first turn, Ana chooses three vertices $X,Y$ and $Z$ and writes down $\triangle XYZ.$ Then, Barbu chooses two of $X,Y$ and $Z,$ for example $X$ and $Y$ , and an unchosen vertex $T$ , and writes down $\triangle XYT.$ The game goes on and at each turn, the player must choose a new vertex $R$ and write down $\triangle PQR$ , where $P$ is the last vertex chosen by the other player, and $Q$ is one of the other vertices of the last triangle written down by the other player.

If one player cannot perform a move, then the other one wins. If both people play optimally, determine who has a winning strategy.
