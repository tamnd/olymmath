---
tag: Q0CXXG8QWH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2008 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h1927038
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73173
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: pumac/2008
    source: hf-ai-mo-aops
    label: 2008 Princeton University Math Competition
---
In his youth, Professor John Horton Conway lived on a farm with $2009$ cows. Conway wishes to move the cows from the negative $x$ axis to the positive $x$ axis. The cows are initially lined up in order $1, 2, . . . , 2009$ on the negative $x$ axis. Conway can give two possible commands to the cows. One is the PUSH command, upon which the first cow from the negative $x$ axis moves to the lowest position on the positive $y$ axis. The other is the POP command, upon which the cow in the lowest position on the $y$ axis moves to the positive $x$ axis. For example, if Conway says PUSH POP $2009$ times, then the resulting permutation of cows is the same, $1, 2, . . . , 2009$ . If Conway says PUSH $2009$ times followed by POP $2009$ times, the resulting permutation of cows is $2009, . . . , 2, 1$ .
How many output permutations are possible after Conway finishes moving all the cows from the negative $x$ axis to the positive $x$ axis?
