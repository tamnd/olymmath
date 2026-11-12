---
tag: GV283TG4CV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2006 Estonia National Olympiad
    url: https://artofproblemsolving.com/community/c6h217772
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=38790
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ee-mo/2006
    source: hf-ai-mo-aops
    label: 2006 Estonia National Olympiad
---
The Ababi alphabet consists of letters A and B, and the words in the Ababi language are precisely those that can be formed by the following two rules:
1) A is a word.
2) If s is a word, then $ s \oplus s$ and $ s \oplus \bar{s}$ are words, where $ \bar{s}$ denotes a word that is obtained by replacing all letters A in s with letters B, and vice versa; and $ x \oplus y$ denotes the concatenation of x and y.
The Ululu alphabet consists also of letters A and B and the words in the Ululu language are precisely those that can be formed by the following two rules:
1) A is a word.
2) If s is a word, $ s \oplus s$ and $ s \oplus \bar{s}$ are words, where $ \bar{s}$ is defined as above and $ x \oplus y$ is a word obtained from words x and y of equal length by writing the letters of x and y alternatingly, starting from the first letter of x.
Prove that the two languages consist of the same words.
