---
tag: 6R1AA1ZCCR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2010 Tournament Of Towns
    url: https://artofproblemsolving.com/community/c6h392426
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=5967
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=208116
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 2010 Tournament Of Towns
---
Two dueling wizards are at an altitude of $100$ above the sea. They cast spells in turn, and each spell is of the form "decrease the altitude by $a$ for me and by $b$ for my rival" where $a$ and $b$ are real numbers such that $0 < a < b$ . Different spells have different values for $a$ and $b$ . The set of spells is the same for both wizards, the spells may be cast in any order, and the same spell may be cast many times. A wizard wins if after some spell, he is still above water but his rival is not. Does there exist a set of spells such that the second wizard has a guaranteed win, if the number of spells is $(a)$ finite; $(b)$ infinite?
