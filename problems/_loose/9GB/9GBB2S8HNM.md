---
tag: 9GBB2S8HNM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2025 USEMO
    url: https://artofproblemsolving.com/community/c6h3702873
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=3039
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: usemo/2025
    source: hf-ai-mo-aops
    label: 2025 USEMO
---
Azza and Bob are playing the *squeakuences game*, a game whose rules depend on two positive integers $n$ and $g$ known to both players. A *squeakuence* is an ordered sequence of $100$ integers (not necessarily positive). At the start of the game, Azza gives Bob a list of $n$ different squeakuences, and Bob secretly picks one squeakuence and copies it into a notebook which Azza cannot see.

On each turn of the game, Azza makes up to $g$ guesses for the squeakuence currently in the notebook. Bob hears all of Azza's guesses. If any of Azza's guesses are correct, the game ends and Azza wins. Otherwise, Bob privately chooses an index $1 \le i \le 100$ and an integer $\delta \in \{-1,0,1\}$ , and secretly modifies the squeakuence written in the notebook by adding $\delta$ to its $i$ th entry. (Azza is not told either $i$ or $\delta$ .) The values of $i$ and $\delta$ can change from turn to turn.

Find the smallest real number $\alpha$ for which there exists $C>0$ making the following statement true: Azza can always guarantee winning the squeakuences game provided that $g > C n^{\alpha}$ .

*Kornpholkrit Weraarchakul*
