---
tag: 1RFAJ5HXA0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: Russian TST 2018
    url: https://artofproblemsolving.com/community/c6h3042602
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=57205
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-tst/2018
    source: hf-ai-mo-aops
    label: Russian TST 2018
---
Let $\mathcal{F}$ be a finite family of subsets of some set $X{}$ . It is known that for any two elements $x,y\in X$ there exists a permutation $\pi$ of the set $X$ such that $\pi(x)=y$ , and for any $A\in\mathcal{F}$ $$\pi(A):=\{\pi(a):a\in A\}\in\mathcal{F}.$$A bear and crocodile play a game. At a move, a player paints one or more elements of the set $X$ in his own color: brown for the bear, green for the crocodile. The first player to fully paint one of the sets in $\mathcal{F}$ in his own color loses. If this does not happen and all the elements of $X$ have been painted, it is a draw. The bear goes first. Prove that he doesn't have a winning strategy.
