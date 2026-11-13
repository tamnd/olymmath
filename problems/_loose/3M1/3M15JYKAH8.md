---
tag: 3M15JYKAH8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1952 Moscow Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h1891735
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=56697
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=249595
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-moscow/1952
    source: hf-ai-mo-aops
    label: 1952 Moscow Mathematical Olympiad
---
Two men, $A$ and $B$ , set out from town $M$ to town $N$ , which is $15$ km away. Their walking speed is $6$ km/hr. They also have a bicycle which they can ride at $15$ km/hr. Both $A$ and $B$ start simultaneously, $A$ walking and $B$ riding a bicycle until $B$ meets a pedestrian girl, $C$ , going from $N$ to $M$ . Then $B$ lends his bicycle to $C$ and proceeds on foot; $C$ rides the bicycle until she meets $A$ and gives $A$ the bicycle which $A$ rides until he reaches $N$ . The speed of $C$ is the same as that of $A$ and $B$ . The time spent by $A$ and $B$ on their trip is measured from the moment they started from $M$ until the arrival of the last of them at $N$ .

a) When should the girl $C$ leave $N$ for $A$ and $B$ to arrive simultaneously in $N$ ?
b) When should $C$ leave $N$ to minimize this time?
