---
tag: NZ6BS49VC3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Rioplatense Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h3211218
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=27634
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=228022
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: rioplatense/2023
    source: hf-ai-mo-aops
    label: 2023 Rioplatense Mathematical Olympiad
---
Let $n>d>0$ integers. Batman, Joker, Clark play the following game in an infinite checkered board. Initially, Batman and Joker are in cells with distance $n$ and a candy is in a cell with distance $d$ to Batman. Batman is blindfold, and can only see his cell. Clark and Joker can see the whole board. The following two moves go alternately.
1 - Batman goes to an adjacent cell. If he touches Joker, Batman loses. If he touches the candy, Batman wins. If the cell is empty, Clark chooses to say loudly one of the following two words **hot** or **cold**.
2 - Joker goes to an adjacent cell. If he touches Batman or candy, Joker wins. Otherwise, the game continues.
Determine for each $d$ , the least $n$ , such that Batman, and Clark can plan an strategy to ensure the Batman's win, regardless of initial positions of the Joker and of the candy.
Note: Two cells are adjacent if its have a common side. The distance between two cells $X$ and $Y$ is the least $p$ such that there exist cells $X=X_0,X_1,X_2,\dots, X_p=Y$ with $X_i$ adjacent to $X_{i-1}$ for all $i=1,2,\dots,p$ .
