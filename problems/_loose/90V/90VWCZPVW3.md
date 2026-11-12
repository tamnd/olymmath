---
tag: 90VWCZPVW3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2008 Turkey MO (2nd round)
    url: https://artofproblemsolving.com/community/c6h243728
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=62467
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tr-mo/2008
    source: hf-ai-mo-aops
    label: 2008 Turkey MO (2nd round)
---
There is a connected network with $ 2008$ computers, in which any of the two cycles don't have any common vertex. A hacker and a administrator are playing a game in this network. On the $ 1st$ move hacker selects one computer and hacks it, on the $ 2nd$ move administrator selects another computer and protects it. Then on every $ 2k+1th$ move hacker hacks one more computer(if he can) which wasn't protected by the administrator and is directly connected (with an edge) to a computer which was hacked by the hacker before and on every $ 2k+2th$ move administrator protects one more computer(if he can) which wasn't hacked by the hacker and is directly connected (with an edge) to a computer which was protected by the administrator before for every $ k>0$ . If both of them can't make move, the game ends. Determine the maximum number of computers which the hacker can guarantee to hack at the end of the game.
