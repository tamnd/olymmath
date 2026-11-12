---
tag: FZ3BNEMMV5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2001 Estonia National Olympiad
    url: https://artofproblemsolving.com/community/c6h2028110
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=38689
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ee-mo/2001
    source: hf-ai-mo-aops
    label: 2001 Estonia National Olympiad
---
A tribe called Ababab uses only letters $A$ and $B$ , and they create words according to the following rules:
(1) $A$ is a word;
(2) if $w$ is a word, then $ww$ and $w\overline{w}$ are also words, where $\overline{w}$ is obtained from $w$ by replacing all letters $A$ with $B$ and all letters $B$ with $A$ ( $xy$ denotes the concatenation of $x$ and $y$ )
(3) all words are created by rules (1) and (2).
Prove that any two words with the same number of letters differ exactly in half of their letters.
