---
tag: BN62JAX91J
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2002 IberoAmerican
    url: https://artofproblemsolving.com/community/c6h83726
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=23005
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=224130
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ibero/2002
    source: hf-ai-mo-aops
    label: 2002 IberoAmerican
---
A policeman is trying to catch a robber on a board of $2001\times2001$ squares. They play alternately, and the player whose trun it is moves to a space in one of the following directions: $\downarrow,\rightarrow,\nwarrow$ .

If the policeman is on the square in the bottom-right corner, he can go directly to the square in the upper-left corner (the robber can not do this). Initially the policeman is in the central square, and the robber is in the upper-left adjacent square. Show that: $a)$ The robber may move at least $10000$ times before the being captured. $b)$ The policeman has an strategy such that he will eventually catch the robber.

Note: The policeman can catch the robber if he reaches the square where the robber is, but not if the robber enters the square occupied by the policeman.
