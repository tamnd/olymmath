---
tag: J7CDPCESX6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2018 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h1620762
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=16834
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=218474
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2018
    source: hf-ai-mo-aops
    label: 2018 Online Math Open Problems
---
Let $\bigoplus$ and $\bigotimes$ be two binary boolean operators, i.e. functions that send $\{\text{True}, \text{False}\}\times \{\text{True}, \text{False}\}$ to $\{\text{True}, \text{False}\}$ . Find the number of such pairs $(\bigoplus, \bigotimes)$ such that $\bigoplus$ and $\bigotimes$ distribute over each other, that is, for any three boolean values $a, b, c$ , the following four equations hold:

1) $c \bigotimes (a \bigoplus b) = (c \bigotimes a) \bigoplus (c \bigotimes b);$
2) $(a \bigoplus b) \bigotimes c = (a \bigotimes c) \bigoplus (b \bigotimes c);$ 3) $c \bigoplus (a \bigotimes b) = (c \bigoplus a) \bigotimes (c \bigoplus b);$ 4) $(a \bigotimes b) \bigoplus c = (a \bigoplus c) \bigotimes (b \bigoplus c).$ *Proposed by Yannick Yao
